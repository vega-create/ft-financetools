export interface Tool { name: string; slug: string; description: string; icon: string; category: string; }
export interface Category { id: string; name: string; icon: string; }

export const categories: Category[] = [
  { id: 'loan', name: 'Loans & Mortgage', icon: '🏠' },
  { id: 'invest', name: 'Investing & Savings', icon: '📈' },
  { id: 'income', name: 'Income & Tax', icon: '💰' },
  { id: 'everyday', name: 'Everyday Finance', icon: '🛒' },
];

export const tools: Tool[] = [
  { name: 'Mortgage Calculator', slug: 'mortgage-calc', description: 'Calculate monthly payments and total interest for home loans.', icon: '🏠', category: 'loan' },
  { name: 'Loan Calculator', slug: 'loan-calc', description: 'Calculate payments for any type of loan.', icon: '💳', category: 'loan' },
  { name: 'Amortization Table', slug: 'amortization', description: 'View full payment schedule with principal and interest breakdown.', icon: '📊', category: 'loan' },
  { name: 'Compound Interest', slug: 'compound-interest', description: 'Calculate how your money grows with compound interest.', icon: '📈', category: 'invest' },
  { name: 'Investment Return', slug: 'investment-return', description: 'Calculate ROI and annualized returns on investments.', icon: '💹', category: 'invest' },
  { name: 'Savings Goal', slug: 'savings-goal', description: 'Plan how much to save monthly to reach your goal.', icon: '🎯', category: 'invest' },
  { name: 'Salary Calculator', slug: 'salary-calc', description: 'Convert between hourly, monthly, and annual salary.', icon: '💵', category: 'income' },
  { name: 'Income Tax Estimator', slug: 'tax-estimator', description: 'Estimate US federal income tax brackets.', icon: '🏛️', category: 'income' },
  { name: 'Net Worth Tracker', slug: 'net-worth', description: 'Calculate your net worth from assets and liabilities.', icon: '📋', category: 'income' },
  { name: 'Tip Calculator', slug: 'tip-calc', description: 'Calculate tips and split bills among friends.', icon: '🍽️', category: 'everyday' },
  { name: 'Discount Calculator', slug: 'discount-calc', description: 'Calculate sale prices and savings from discounts.', icon: '🏷️', category: 'everyday' },
  { name: 'Currency Converter', slug: 'currency-converter', description: 'Convert between major world currencies.', icon: '💱', category: 'everyday' },
];

export function getToolsByCategory(categoryId: string): Tool[] {
  return tools.filter(t => t.category === categoryId);
}
