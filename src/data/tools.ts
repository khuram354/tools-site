// Single source of truth for every tool on the site.
// Add a new tool here once and it can show up on /tools/ and the homepage.

export interface Tool {
    name: string;
    description: string;
    href: string;
    icon: string;
}

export interface ToolCategory {
    id: string;
    name: string;
    description: string;
    tools: Tool[];
}

export const toolCategories: ToolCategory[] = [
    {
        id: "pakistan-tax",
        name: "Pakistan Tax & Finance",
        description:
            "Calculators for Pakistan income tax, Zakat, loans, and freelancer taxes.",
        tools: [
            {
                name: "Salary Tax Calculator",
                description:
                    "Calculate income tax and take-home salary for Pakistan (FY 2026-27).",
                href: "/tools/salary-tax-calculator/",
                icon: "tax",
            },
            {
                name: "Freelancer Tax Calculator",
                description:
                    "Calculate income tax for Pakistani freelancers (IT export & local).",
                href: "/tools/freelancer-tax-calculator/",
                icon: "freelancer",
            },
            {
                name: "Zakat Calculator",
                description:
                    "Calculate Zakat on gold, silver, cash, savings, and investments.",
                href: "/tools/zakat-calculator/",
                icon: "zakat",
            },
            {
                name: "EMI Calculator",
                description:
                    "Calculate loan EMI, total interest, and total payment for Pakistan.",
                href: "/tools/emi-calculator/",
                icon: "emi",
            },
        ],
    },
    {
        id: "finance",
        name: "Finance & Math",
        description: "Everyday financial and percentage calculations.",
        tools: [
            {
                name: "Percentage Calculator",
                description:
                    "Solve X% of Y, percentage change, discounts, and more.",
                href: "/tools/percentage-calculator/",
                icon: "percentage",
            },
        ],
    },
    {
        id: "image",
        name: "Image Tools",
        description:
            "Compress, resize, crop, and convert images in your browser.",
        tools: [
            {
                name: "Image Compressor",
                description:
                    "Compress JPG, PNG, and WebP images to reduce file size.",
                href: "/tools/image-compressor/",
                icon: "image-compress",
            },
            {
                name: "Image Resizer",
                description:
                    "Resize images to any dimension with aspect ratio control.",
                href: "/tools/image-resizer/",
                icon: "image-resize",
            },
            {
                name: "Image Cropper",
                description: "Crop images to any size or aspect ratio.",
                href: "/tools/image-cropper/",
                icon: "image-crop",
            },
            {
                name: "Image Converter",
                description: "Convert between JPG, PNG, and WebP formats.",
                href: "/tools/image-converter/",
                icon: "image-convert",
            },
        ],
    },
    {
        id: "utility",
        name: "Utility Tools",
        description: "Generators and everyday utilities that just work.",
        tools: [
            {
                name: "QR Code Generator",
                description:
                    "Create custom QR codes for any text or URL. Download as PNG, free.",
                href: "/tools/qr-generator/",
                icon: "qr",
            },
            {
                name: "Password Generator",
                description:
                    "Generate strong, random passwords with custom length and character types.",
                href: "/tools/password-generator/",
                icon: "password",
            },
            {
                name: "Unit Converter",
                description:
                    "Convert length, weight, temperature, area, volume, speed, and time.",
                href: "/tools/unit-converter/",
                icon: "unit",
            },
            {
                name: "Age Calculator",
                description:
                    "Find your exact age in years, months, days, plus next birthday countdown.",
                href: "/tools/age-calculator/",
                icon: "age",
            },
        ],
    },
    {
        id: "developer",
        name: "Developer Tools",
        description: "For developers working with APIs, JSON, and code.",
        tools: [
            {
                name: "JSON Formatter",
                description:
                    "Format, validate, and beautify JSON data online. Detect syntax errors.",
                href: "/tools/json-formatter/",
                icon: "json",
            },
        ],
    },
    {
        id: "writing",
        name: "Writing & Text Tools",
        description: "Count words, characters, and estimate reading time.",
        tools: [
            {
                name: "Word Counter",
                description:
                    "Count words, characters, sentences, and estimate reading time instantly.",
                href: "/tools/word-counter/",
                icon: "word",
            },
        ],
    },
];

export const allTools: Tool[] = toolCategories.flatMap((c) => c.tools);