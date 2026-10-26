// Pakistan Salaried Individuals Tax Slabs
// Tax Year 2027 (FY 2026-27)
// Source: Finance Act 2026, FBR Pakistan
//
// When FBR changes the slabs, edit THIS file only. The calculator and the slab
// table on the Salary Tax Calculator page both read from it.

export interface TaxSlab {
  min: number;
  max: number | null;
  fixedTax: number;
  rate: number;
  description: string;
}

export const TAX_YEAR = '2026-27';
export const CURRENCY = 'PKR';
// Set this to the date you last re-checked the figures below against FBR.
// The Salary Tax Calculator page shows it as "Last reviewed".
export const LAST_UPDATED = '2026-10-25';

export const salariedSlabs: TaxSlab[] = [
  {
    min: 0,
    max: 600000,
    fixedTax: 0,
    rate: 0,
    description: 'Up to PKR 600,000 — Tax Free',
  },
  {
    min: 600001,
    max: 1200000,
    fixedTax: 0,
    rate: 0.01,
    description: 'PKR 600,001 – 1,200,000 — 1% of amount exceeding 600,000',
  },
  {
    min: 1200001,
    max: 2200000,
    fixedTax: 6000,
    rate: 0.11,
    description: 'PKR 1,200,001 – 2,200,000 — PKR 6,000 + 11% of amount exceeding 1,200,000',
  },
  {
    min: 2200001,
    max: 3200000,
    fixedTax: 116000,
    rate: 0.20,
    description: 'PKR 2,200,001 – 3,200,000 — PKR 116,000 + 20% of amount exceeding 2,200,000',
  },
  {
    min: 3200001,
    max: 4100000,
    fixedTax: 316000,
    rate: 0.25,
    description: 'PKR 3,200,001 – 4,100,000 — PKR 316,000 + 25% of amount exceeding 3,200,000',
  },
  {
    min: 4100001,
    max: 5600000,
    fixedTax: 541000,
    rate: 0.29,
    description: 'PKR 4,100,001 – 5,600,000 — PKR 541,000 + 29% of amount exceeding 4,100,000',
  },
  {
    min: 5600001,
    max: 7000000,
    fixedTax: 976000,
    rate: 0.32,
    description: 'PKR 5,600,001 – 7,000,000 — PKR 976,000 + 32% of amount exceeding 5,600,000',
  },
  {
    min: 7000001,
    max: null,
    fixedTax: 1424000,
    rate: 0.35,
    description: 'Above PKR 7,000,000 — PKR 1,424,000 + 35% of amount exceeding 7,000,000',
  },
];

// Federal minimum wage from July 2026 (Rs 40,700 per month).
// Provinces can set a higher figure (for example Sindh: Rs 43,000), and that
// changes the EOBI amount for employees there.
export const MINIMUM_WAGE = 40700; // PKR per month

// The employee's EOBI share is 1% of the minimum wage (407 at Rs 40,700).
export const EOBI_EMPLOYEE_CONTRIBUTION = Math.round(MINIMUM_WAGE * 0.01); // PKR per month

// Old name, kept so any other file that still imports it keeps working.
// It is the minimum wage, not a salary limit.
export const EOBI_WAGE_LIMIT = MINIMUM_WAGE;

// Calculate annual income tax based on annual taxable income
export function calculateAnnualTax(annualIncome: number): {
  tax: number;
  slab: TaxSlab | null;
  taxableAmountInSlab: number;
} {
  // Nothing to tax (also guards against negative or invalid input)
  if (!(annualIncome > 0)) {
    return { tax: 0, slab: salariedSlabs[0], taxableAmountInSlab: 0 };
  }

  for (const slab of salariedSlabs) {
    // Compare against each slab's upper limit only. This leaves no gaps, so
    // amounts such as 600,000.50 still land in a slab.
    if (slab.max === null || annualIncome <= slab.max) {
      // The slab starts just above the previous limit (min is that limit + 1)
      const slabFloor = Math.max(slab.min - 1, 0);
      const taxableAmountInSlab = annualIncome - slabFloor;
      const tax = slab.fixedTax + taxableAmountInSlab * slab.rate;
      return { tax, slab, taxableAmountInSlab };
    }
  }

  return { tax: 0, slab: null, taxableAmountInSlab: 0 };
}

// Helper: Format PKR, e.g. "PKR 1,800,000". Same style as the other calculators,
// and the same result in every browser (no dependence on the visitor's locale data).
export function formatPKR(amount: number): string {
  return `${CURRENCY} ${Math.round(amount).toLocaleString('en-US')}`;
}