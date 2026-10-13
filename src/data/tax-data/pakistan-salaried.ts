// Pakistan Salaried Individuals Tax Slabs
// Tax Year 2027 (FY 2026-27)
// Source: Finance Act 2026, FBR Pakistan

export interface TaxSlab {
  min: number;
  max: number | null;
  fixedTax: number;
  rate: number;
  description: string;
}

export const TAX_YEAR = '2026-27';
export const CURRENCY = 'PKR';
export const LAST_UPDATED = '2026-10-10';

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

// Standard deductions (commonly applied)
export const EOBI_EMPLOYEE_CONTRIBUTION = 407; // PKR per month
export const EOBI_WAGE_LIMIT = 40700; // PKR per month (minimum wage, effective July 2026)

// Calculate annual income tax based on annual taxable income
export function calculateAnnualTax(annualIncome: number): {
  tax: number;
  slab: TaxSlab | null;
  taxableAmountInSlab: number;
} {
  for (const slab of salariedSlabs) {
    const isInSlab =
      annualIncome >= slab.min &&
      (slab.max === null || annualIncome <= slab.max);

    if (isInSlab) {
      const taxableAmountInSlab = annualIncome - slab.min;
      const tax = slab.fixedTax + taxableAmountInSlab * slab.rate;
      return { tax, slab, taxableAmountInSlab };
    }
  }

  return { tax: 0, slab: null, taxableAmountInSlab: 0 };
}

// Helper: Format PKR
export function formatPKR(amount: number): string {
  return new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
    maximumFractionDigits: 0,
  }).format(amount);
}