
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// Read the implemented HTML and JavaScript files.
const html = fs.readFileSync(
    path.join(__dirname, "../src/index.html"),
    "utf8"
);

const script = fs.readFileSync(
    path.join(__dirname, "../scripts/script.js"),
    "utf8"
);

// Define the four required website categories.
const categories = [
    "data-sources",
    "collection-methods",
    "analysis-methods",
    "publication-venues"
];

// Create a minimal simulated DOM to test navigation behavior.
function createTestPage() {
    const sections = categories.map((id) => ({
        id,
        hidden: false
    }));

    const buttons = categories.map((id) => {
        const classes = new Set();
        const attributes = {};
        let clickHandler;

        return {
            dataset: { section: id },

            classList: {
                toggle(name, enabled) {
                    if (enabled) classes.add(name);
                    else classes.delete(name);
                },

                contains(name) {
                    return classes.has(name);
                }
            },

            setAttribute(name, value) {
                attributes[name] = value;
            },

            getAttribute(name) {
                return attributes[name];
            },

            addEventListener(event, handler) {
                if (event === "click") clickHandler = handler;
            },

            click() {
                if (clickHandler) clickHandler();
            }
        };
    });

    // Return the simulated elements requested by script.js.
    const document = {
        querySelectorAll(selector) {
            if (selector === "nav button[data-section]") {
                return buttons;
            }

            if (selector === "main section[id]") {
                return sections;
            }

            return [];
        }
    };

    // Execute the actual navigation script in the simulated DOM.
    vm.runInNewContext(script, { document });

    return { sections, buttons };
}

// Test 1: Verify that all four categories exist in the HTML.
test("HTML contains four navigation categories", () => {
    for (const category of categories) {
        assert.ok(
            html.includes(`data-section="${category}"`),
            `Missing navigation button: ${category}`
        );

        assert.ok(
            html.includes(`id="${category}"`),
            `Missing content section: ${category}`
        );
    }
});

// Test 2: Verify the seven required data sources.
test("Data Sources contains all seven required sources", () => {
    const sources = [
        "GitHub",
        "Stack Overflow",
        "JIRA",
        "App Stores",
        "Travis CI / Jenkins",
        "Mailing Lists",
        "npm Registry"
    ];

    // Extract the table body from the Data Sources section.
    const section = html.match(
        /<section\s+id="data-sources">([\s\S]*?)<\/section>/i
    );

    assert.ok(section, "Data Sources section is missing");

    const tbody = section[1].match(
        /<tbody>([\s\S]*?)<\/tbody>/i
    );

    assert.ok(tbody, "Data Sources table body is missing");

    const rows = [
        ...tbody[1].matchAll(/<tr>([\s\S]*?)<\/tr>/gi)
    ];

    assert.equal(rows.length, 7);

    // Verify that every source has three non-empty columns.
    sources.forEach((source, index) => {
        const cells = [
            ...rows[index][1].matchAll(/<td>([\s\S]*?)<\/td>/gi)
        ];

        assert.equal(cells.length, 3);
        assert.equal(cells[0][1].trim(), source);
        assert.ok(cells[1][1].trim());
        assert.ok(cells[2][1].trim());
    });
});

// Test 3: Verify the default visible section.
test("Data Sources is visible by default", () => {
    const { sections } = createTestPage();

    assert.equal(sections[0].hidden, false);

    for (let i = 1; i < sections.length; i++) {
        assert.equal(sections[i].hidden, true);
    }
});

// Test 4: Verify that navigation switches sections.
test("Clicking navigation buttons switches sections", () => {
    const { sections, buttons } = createTestPage();

    buttons.forEach((button, index) => {
        // Simulate a user clicking each navigation button.
        button.click();

        sections.forEach((section, sectionIndex) => {
            assert.equal(
                section.hidden,
                sectionIndex !== index
            );
        });

        // Verify that the selected button has the active state.
        assert.equal(button.classList.contains("active"), true);
        assert.equal(button.getAttribute("aria-pressed"), "true");
    });
});
