import { Course } from '@/types';

export const courses: Course[] = [
  {
    id: 'course-a',
    title: 'Basics of Accounting',
    description: 'Master the fundamentals of accounting including journal entries, ledgers, balance sheets, and more. Perfect for beginners starting their finance journey.',
    shortDescription: 'Master fundamental accounting principles and practices',
    icon: '📊',
    color: 'from-blue-500 to-cyan-400',
    estimatedHours: 8,
    modules: [
      {
        id: 'a-m1',
        title: 'Meaning of Accounting',
        description: 'Understanding what accounting is and its role in business',
        estimatedMinutes: 30,
        content: [
          { type: 'heading', content: 'What is Accounting?' },
          { type: 'paragraph', content: 'Accounting is the systematic process of recording, classifying, summarizing, and interpreting financial transactions of a business or organization. It is often called the "language of business" because it communicates the financial health of an organization to stakeholders.' },
          { type: 'heading', content: 'Key Aspects of Accounting' },
          { type: 'list', content: 'Core Components', items: [
            'Recording: Documenting all financial transactions systematically',
            'Classifying: Organizing transactions into meaningful categories',
            'Summarizing: Creating financial statements from classified data',
            'Interpreting: Analyzing financial data for decision-making'
          ]},
          { type: 'definition', content: 'Accounting Equation: Assets = Liabilities + Equity. This fundamental equation forms the basis of double-entry bookkeeping.' },
          { type: 'example', content: 'Example: When a company purchases equipment for $10,000 in cash, it records a decrease in Cash (asset) and an increase in Equipment (asset), keeping the equation balanced.' }
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'a-m1-q1',
              question: 'What is accounting often called?',
              options: ['Language of business', 'Art of numbers', 'Science of money', 'System of records'],
              correctAnswer: 0,
              explanation: 'Accounting is called the "language of business" because it communicates financial information to stakeholders.'
            },
            {
              id: 'a-m1-q2',
              question: 'What is the accounting equation?',
              options: ['Assets = Liabilities - Equity', 'Assets = Liabilities + Equity', 'Assets + Liabilities = Equity', 'Assets - Equity = Liabilities'],
              correctAnswer: 1,
              explanation: 'The fundamental accounting equation states that Assets = Liabilities + Equity.'
            },
            {
              id: 'a-m1-q3',
              question: 'Which is NOT a key aspect of accounting?',
              options: ['Recording', 'Marketing', 'Classifying', 'Summarizing'],
              correctAnswer: 1,
              explanation: 'Marketing is not an aspect of accounting. The key aspects are Recording, Classifying, Summarizing, and Interpreting.'
            }
          ]
        }
      },
      {
        id: 'a-m2',
        title: 'Functions of Accounting',
        description: 'Learn the primary functions that accounting serves in business',
        estimatedMinutes: 25,
        content: [
          { type: 'heading', content: 'Primary Functions of Accounting' },
          { type: 'list', content: 'Main Functions', items: [
            'Recording: Maintaining systematic records of all transactions',
            'Classifying: Grouping similar transactions together',
            'Summarizing: Preparing trial balance and financial statements',
            'Interpreting: Analyzing data for meaningful insights',
            'Communicating: Sharing financial information with stakeholders'
          ]},
          { type: 'paragraph', content: 'These functions work together to provide a complete picture of an organization\'s financial health and help in strategic decision-making.' }
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'a-m2-q1',
              question: 'What is the first step in accounting functions?',
              options: ['Summarizing', 'Interpreting', 'Recording', 'Communicating'],
              correctAnswer: 2,
              explanation: 'Recording is the first step where all financial transactions are documented.'
            },
            {
              id: 'a-m2-q2',
              question: 'What does classifying in accounting mean?',
              options: ['Deleting old records', 'Grouping similar transactions', 'Creating reports', 'Auditing'],
              correctAnswer: 1,
              explanation: 'Classifying means organizing similar transactions into meaningful categories.'
            }
          ]
        }
      },
      {
        id: 'a-m3',
        title: 'Accounting Cycle',
        description: 'Understanding the complete accounting cycle from transactions to statements',
        estimatedMinutes: 35,
        content: [
          { type: 'heading', content: 'The Accounting Cycle' },
          { type: 'paragraph', content: 'The accounting cycle is a step-by-step process to record, classify, and summarize business transactions for a specific period.' },
          { type: 'list', content: 'Steps in the Accounting Cycle', items: [
            '1. Identify and analyze transactions',
            '2. Record transactions in journal',
            '3. Post to ledger accounts',
            '4. Prepare trial balance',
            '5. Make adjusting entries',
            '6. Prepare adjusted trial balance',
            '7. Generate financial statements',
            '8. Close temporary accounts',
            '9. Prepare post-closing trial balance'
          ]}
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'a-m3-q1',
              question: 'How many main steps are in the accounting cycle?',
              options: ['5', '7', '9', '11'],
              correctAnswer: 2,
              explanation: 'The accounting cycle consists of 9 main steps from transaction identification to post-closing trial balance.'
            },
            {
              id: 'a-m3-q2',
              question: 'What comes after recording transactions in journal?',
              options: ['Prepare financial statements', 'Post to ledger', 'Close accounts', 'Make adjustments'],
              correctAnswer: 1,
              explanation: 'After journal entries, transactions are posted to the respective ledger accounts.'
            }
          ]
        }
      },
      {
        id: 'a-m4',
        title: 'Book-keeping vs Accounting',
        description: 'Understanding the difference between book-keeping and accounting',
        estimatedMinutes: 20,
        content: [
          { type: 'heading', content: 'Book-keeping' },
          { type: 'paragraph', content: 'Book-keeping is the systematic recording of financial transactions. It is a subset of accounting focused on the mechanical aspects of recording.' },
          { type: 'heading', content: 'Accounting' },
          { type: 'paragraph', content: 'Accounting encompasses book-keeping but also includes analysis, interpretation, and communication of financial information.' },
          { type: 'list', content: 'Key Differences', items: [
            'Book-keeping: Recording transactions | Accounting: Recording + Analysis',
            'Book-keeping: Clerical work | Accounting: Professional work',
            'Book-keeping: No analysis | Accounting: Interpretation & decision support'
          ]}
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'a-m4-q1',
              question: 'Which involves analysis and interpretation?',
              options: ['Book-keeping only', 'Accounting only', 'Both equally', 'Neither'],
              correctAnswer: 1,
              explanation: 'Accounting involves analysis and interpretation, while book-keeping focuses on recording.'
            }
          ]
        }
      },
      {
        id: 'a-m5',
        title: 'Objectives of Accounting',
        description: 'Learn why accounting exists and what it aims to achieve',
        estimatedMinutes: 25,
        content: [
          { type: 'heading', content: 'Main Objectives' },
          { type: 'list', content: 'Key Objectives of Accounting', items: [
            'Maintain systematic records of transactions',
            'Determine profit or loss for a period',
            'Show financial position (Balance Sheet)',
            'Provide information for decision-making',
            'Prevent fraud and errors',
            'Meet legal requirements',
            'Facilitate comparison and planning'
          ]}
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'a-m5-q1',
              question: 'Which is NOT an objective of accounting?',
              options: ['Show financial position', 'Prevent fraud', 'Increase sales directly', 'Meet legal requirements'],
              correctAnswer: 2,
              explanation: 'Increasing sales is not a direct objective of accounting. Accounting provides information for decision-making.'
            }
          ]
        }
      },
      {
        id: 'a-m6',
        title: 'Accounting Elements',
        description: 'Assets, Liabilities, Equity, Revenue, Expenses and more',
        estimatedMinutes: 45,
        content: [
          { type: 'heading', content: 'The Five Main Elements' },
          { type: 'definition', content: 'Assets: Resources owned by a business (Cash, Equipment, Inventory, Accounts Receivable)' },
          { type: 'definition', content: 'Liabilities: Obligations owed to others (Loans, Accounts Payable, Accrued Expenses)' },
          { type: 'definition', content: 'Equity: Owner\'s residual interest in assets after deducting liabilities' },
          { type: 'definition', content: 'Revenue: Income earned from business operations (Sales, Service Income)' },
          { type: 'definition', content: 'Expenses: Costs incurred to generate revenue (Salaries, Rent, Utilities)' },
          { type: 'heading', content: 'Other Important Terms' },
          { type: 'definition', content: 'Net Income = Revenue - Expenses' },
          { type: 'definition', content: 'Accounts Receivable (AR): Money owed to the company by customers' },
          { type: 'definition', content: 'Accounts Payable (AP): Money the company owes to suppliers' }
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'a-m6-q1',
              question: 'What is Accounts Receivable?',
              options: ['Money owed to suppliers', 'Money owed by customers', 'Cash in bank', 'Owner\'s equity'],
              correctAnswer: 1,
              explanation: 'Accounts Receivable is money owed to the company by its customers for goods/services sold on credit.'
            },
            {
              id: 'a-m6-q2',
              question: 'How is Net Income calculated?',
              options: ['Assets - Liabilities', 'Revenue - Expenses', 'Revenue + Expenses', 'Assets + Liabilities'],
              correctAnswer: 1,
              explanation: 'Net Income = Revenue - Expenses. It represents the profit earned during a period.'
            }
          ]
        }
      },
      {
        id: 'a-m7',
        title: 'Balance Sheet & Income Statement',
        description: 'Understanding the two primary financial statements',
        estimatedMinutes: 40,
        content: [
          { type: 'heading', content: 'Balance Sheet' },
          { type: 'paragraph', content: 'The Balance Sheet shows the financial position at a specific point in time. It lists Assets, Liabilities, and Equity.' },
          { type: 'heading', content: 'Income Statement' },
          { type: 'paragraph', content: 'The Income Statement (P&L) shows revenues and expenses over a period, resulting in net profit or loss.' },
          { type: 'example', content: 'Balance Sheet Example: Total Assets ($100,000) = Total Liabilities ($40,000) + Equity ($60,000)' }
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'a-m7-q1',
              question: 'What does a Balance Sheet show?',
              options: ['Profit for a year', 'Cash flow', 'Financial position at a point in time', 'Revenue trends'],
              correctAnswer: 2,
              explanation: 'A Balance Sheet shows the financial position of a company at a specific point in time.'
            }
          ]
        }
      },
      {
        id: 'a-m8',
        title: 'Personal, Real & Nominal Accounts',
        description: 'Classification of accounts and golden rules',
        estimatedMinutes: 35,
        content: [
          { type: 'heading', content: 'Types of Accounts' },
          { type: 'definition', content: 'Personal Accounts: Relate to persons, firms, or companies (Debit the receiver, Credit the giver)' },
          { type: 'definition', content: 'Real Accounts: Relate to assets (Debit what comes in, Credit what goes out)' },
          { type: 'definition', content: 'Nominal Accounts: Relate to expenses, losses, incomes, gains (Debit expenses/losses, Credit incomes/gains)' }
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'a-m8-q1',
              question: 'What is the rule for Real Accounts?',
              options: ['Debit the receiver', 'Debit what comes in', 'Debit expenses', 'Debit losses'],
              correctAnswer: 1,
              explanation: 'For Real Accounts: Debit what comes in, Credit what goes out.'
            }
          ]
        }
      },
      {
        id: 'a-m9',
        title: 'Specific Transactions',
        description: 'Cash Discount, Bad Debts, Depreciation, Accrued Income',
        estimatedMinutes: 40,
        content: [
          { type: 'heading', content: 'Special Transactions' },
          { type: 'definition', content: 'Cash Discount: Reduction in price for early payment - recorded separately from purchase price' },
          { type: 'definition', content: 'Bad Debts: Amounts that cannot be recovered from debtors - treated as an expense' },
          { type: 'definition', content: 'Depreciation: Systematic allocation of asset cost over its useful life' },
          { type: 'definition', content: 'Accrued Income: Income earned but not yet received - recorded as an asset' },
          { type: 'example', content: 'Depreciation Example: Machine cost $10,000, useful life 5 years. Annual depreciation = $10,000/5 = $2,000' }
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'a-m9-q1',
              question: 'What is depreciation?',
              options: ['Increase in asset value', 'Allocation of asset cost over time', 'Cash discount', 'Bad debt'],
              correctAnswer: 1,
              explanation: 'Depreciation is the systematic allocation of an asset\'s cost over its useful life.'
            },
            {
              id: 'a-m9-q2',
              question: 'How are bad debts treated?',
              options: ['As income', 'As asset', 'As expense', 'As liability'],
              correctAnswer: 2,
              explanation: 'Bad debts are amounts that cannot be recovered and are treated as an expense.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'course-b',
    title: 'Order to Cash (O2C)',
    description: 'Complete understanding of the Order to Cash cycle from customer order to payment collection. Essential for finance professionals.',
    shortDescription: 'End-to-end Order to Cash process mastery',
    icon: '💰',
    color: 'from-emerald-500 to-teal-400',
    estimatedHours: 6,
    modules: [
      {
        id: 'b-m1',
        title: 'Introduction to O2C',
        description: 'Understanding the Order to Cash process and its importance',
        estimatedMinutes: 30,
        content: [
          { type: 'heading', content: 'What is Order to Cash?' },
          { type: 'paragraph', content: 'Order to Cash (O2C) is a business process that encompasses all steps from receiving a customer order to collecting payment. It is a critical revenue cycle that directly impacts cash flow and customer satisfaction.' },
          { type: 'list', content: 'Why O2C Matters', items: [
            'Directly affects company cash flow',
            'Impacts customer experience and relationships',
            'Influences working capital management',
            'Affects financial reporting accuracy'
          ]}
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'b-m1-q1',
              question: 'What does O2C stand for?',
              options: ['Order to Customer', 'Order to Cash', 'Order to Credit', 'Order to Collection'],
              correctAnswer: 1,
              explanation: 'O2C stands for Order to Cash, covering the entire cycle from order receipt to payment collection.'
            }
          ]
        }
      },
      {
        id: 'b-m2',
        title: 'O2C Cycle Overview',
        description: 'High-level view of all steps in the O2C process',
        estimatedMinutes: 35,
        content: [
          { type: 'heading', content: 'The Complete O2C Cycle' },
          { type: 'list', content: 'Key Steps', items: [
            '1. Order Management - Receiving and processing orders',
            '2. Credit Management - Checking customer creditworthiness',
            '3. Order Fulfillment - Picking, packing, shipping',
            '4. Billing/Invoicing - Generating and sending invoices',
            '5. Accounts Receivable - Tracking money owed',
            '6. Cash Application - Matching payments to invoices',
            '7. Collections - Following up on overdue payments'
          ]}
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'b-m2-q1',
              question: 'What is the first step in O2C?',
              options: ['Billing', 'Order Management', 'Cash Application', 'Collections'],
              correctAnswer: 1,
              explanation: 'Order Management is the first step where customer orders are received and processed.'
            }
          ]
        }
      },
      {
        id: 'b-m3',
        title: 'Detailed O2C Steps',
        description: 'Deep dive into each step from Order to Payment',
        estimatedMinutes: 45,
        content: [
          { type: 'heading', content: 'Order Management' },
          { type: 'paragraph', content: 'Involves receiving orders, validating details, checking inventory, and confirming with customers.' },
          { type: 'heading', content: 'Credit Management' },
          { type: 'paragraph', content: 'Evaluating customer credit limits, risk assessment, and approval processes.' },
          { type: 'heading', content: 'Order Fulfillment' },
          { type: 'paragraph', content: 'Warehouse operations including picking, packing, quality check, and shipment.' },
          { type: 'heading', content: 'Billing & Invoicing' },
          { type: 'paragraph', content: 'Creating accurate invoices with correct terms, pricing, and sending to customers.' },
          { type: 'heading', content: 'AR Management' },
          { type: 'paragraph', content: 'Monitoring outstanding receivables, aging analysis, and dunning processes.' }
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'b-m3-q1',
              question: 'What is the purpose of Credit Management?',
              options: ['Ship products', 'Evaluate customer creditworthiness', 'Apply payments', 'Generate reports'],
              correctAnswer: 1,
              explanation: 'Credit Management evaluates customer creditworthiness to minimize payment risks.'
            },
            {
              id: 'b-m3-q2',
              question: 'What activities are part of Order Fulfillment?',
              options: ['Invoicing', 'Picking, packing, shipping', 'Credit checks', 'Cash application'],
              correctAnswer: 1,
              explanation: 'Order Fulfillment includes warehouse activities like picking, packing, and shipping.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'course-c',
    title: 'Accounts Receivables',
    description: 'Master the management of Accounts Receivable including AR processes, aging, and best practices for optimizing collections.',
    shortDescription: 'Complete Accounts Receivable management',
    icon: '📈',
    color: 'from-violet-500 to-purple-400',
    estimatedHours: 5,
    modules: [
      {
        id: 'c-m1',
        title: 'Introduction to AR',
        description: 'Understanding what Accounts Receivable means and its importance',
        estimatedMinutes: 30,
        content: [
          { type: 'heading', content: 'What is Accounts Receivable?' },
          { type: 'paragraph', content: 'Accounts Receivable (AR) represents money owed to a company by its customers for goods or services delivered on credit. It is a current asset on the balance sheet.' },
          { type: 'definition', content: 'AR = Total Sales on Credit - Collections - Write-offs' }
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'c-m1-q1',
              question: 'Where does AR appear on financial statements?',
              options: ['Income Statement', 'Balance Sheet as Asset', 'Cash Flow Statement', 'Balance Sheet as Liability'],
              correctAnswer: 1,
              explanation: 'Accounts Receivable is a current asset on the Balance Sheet.'
            }
          ]
        }
      },
      {
        id: 'c-m2',
        title: 'How AR Works',
        description: 'The AR process from invoicing to collection',
        estimatedMinutes: 35,
        content: [
          { type: 'heading', content: 'AR Process Flow' },
          { type: 'list', content: 'AR Steps', items: [
            'Invoice is generated after goods/services delivery',
            'Invoice sent to customer with payment terms',
            'AR is recorded in the ledger',
            'Customer makes payment within terms',
            'Payment is applied to the invoice',
            'AR balance is reduced'
          ]},
          { type: 'example', content: 'Example: Company sells $5,000 on credit with Net 30 terms. AR increases by $5,000. When customer pays in 25 days, AR decreases by $5,000.' }
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'c-m2-q1',
              question: 'What happens to AR when customer pays?',
              options: ['Increases', 'Decreases', 'Stays same', 'Becomes liability'],
              correctAnswer: 1,
              explanation: 'When a customer pays, AR decreases because the receivable is collected.'
            }
          ]
        }
      },
      {
        id: 'c-m3',
        title: 'Importance of AR',
        description: 'Why effective AR management is crucial for business',
        estimatedMinutes: 25,
        content: [
          { type: 'heading', content: 'Why AR Matters' },
          { type: 'list', content: 'Key Reasons', items: [
            'Impacts cash flow and working capital',
            'Affects liquidity and ability to pay obligations',
            'Indicates customer payment behavior',
            'Affects profitability through bad debts',
            'Important for financial planning and forecasting'
          ]},
          { type: 'paragraph', content: 'Companies with efficient AR management have better cash flow predictability and lower financing costs.' }
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'c-m3-q1',
              question: 'Poor AR management can lead to?',
              options: ['Increased profits', 'Cash flow problems', 'Lower taxes', 'More customers'],
              correctAnswer: 1,
              explanation: 'Poor AR management leads to cash flow problems as money is tied up in uncollected receivables.'
            }
          ]
        }
      },
      {
        id: 'c-m4',
        title: 'Practical AR Examples',
        description: 'Real-world scenarios and best practices',
        estimatedMinutes: 30,
        content: [
          { type: 'heading', content: 'AR Aging Analysis' },
          { type: 'paragraph', content: 'Aging categorizes AR by how long invoices have been outstanding (Current, 1-30, 31-60, 61-90, 90+ days).' },
          { type: 'heading', content: 'Key AR Metrics' },
          { type: 'definition', content: 'Days Sales Outstanding (DSO) = (AR / Total Credit Sales) × Number of Days' },
          { type: 'example', content: 'If AR is $100,000 and monthly credit sales are $500,000, DSO = ($100,000/$500,000) × 30 = 6 days' }
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'c-m4-q1',
              question: 'What does DSO measure?',
              options: ['Total sales', 'Average collection time', 'Bad debt amount', 'Credit limit'],
              correctAnswer: 1,
              explanation: 'DSO (Days Sales Outstanding) measures the average number of days to collect payment.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'course-d',
    title: 'Cash Application',
    description: 'Learn the complete cash application process including payment matching, exception handling, and reconciliation techniques.',
    shortDescription: 'Master payment matching and reconciliation',
    icon: '💳',
    color: 'from-orange-500 to-amber-400',
    estimatedHours: 7,
    modules: [
      {
        id: 'd-m1',
        title: 'Meaning & Importance',
        description: 'Understanding Cash Application and why it matters',
        estimatedMinutes: 25,
        content: [
          { type: 'heading', content: 'What is Cash Application?' },
          { type: 'paragraph', content: 'Cash Application is the process of matching incoming customer payments to their corresponding invoices. It ensures accurate AR records and timely credit availability for customers.' },
          { type: 'list', content: 'Why Cash Application is Important', items: [
            'Maintains accurate AR aging',
            'Enables proper customer credit management',
            'Facilitates correct financial reporting',
            'Improves customer relationships',
            'Reduces collection efforts on paid invoices'
          ]}
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'd-m1-q1',
              question: 'What is the main purpose of Cash Application?',
              options: ['Creating invoices', 'Matching payments to invoices', 'Shipping products', 'Credit analysis'],
              correctAnswer: 1,
              explanation: 'Cash Application matches incoming payments to their corresponding invoices.'
            }
          ]
        }
      },
      {
        id: 'd-m2',
        title: 'Payment Types',
        description: 'Understanding different types of payments',
        estimatedMinutes: 30,
        content: [
          { type: 'heading', content: 'Common Payment Methods' },
          { type: 'list', content: 'Payment Types', items: [
            'Wire Transfer - Bank to bank electronic transfer',
            'ACH (Automated Clearing House) - Electronic bank payments',
            'Check - Physical paper payments',
            'Credit Card - Card-based payments',
            'Lockbox - Bank-managed collection service'
          ]},
          { type: 'paragraph', content: 'Each payment method has different processing requirements and timelines.' }
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'd-m2-q1',
              question: 'Which is an electronic payment method?',
              options: ['Check', 'Wire Transfer', 'Cash', 'Money Order'],
              correctAnswer: 1,
              explanation: 'Wire Transfer is an electronic bank-to-bank payment method.'
            }
          ]
        }
      },
      {
        id: 'd-m3',
        title: 'Invoice, Credit Note, Debit Note',
        description: 'Understanding key documents in cash application',
        estimatedMinutes: 30,
        content: [
          { type: 'heading', content: 'Key Documents' },
          { type: 'definition', content: 'Invoice: Bill sent to customer for goods/services. Increases AR.' },
          { type: 'definition', content: 'Credit Note: Document reducing customer balance (returns, discounts). Decreases AR.' },
          { type: 'definition', content: 'Debit Note: Document increasing customer balance (additional charges). Increases AR.' },
          { type: 'example', content: 'Customer returns $500 of goods. Credit Note of $500 is issued, reducing their outstanding balance.' }
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'd-m3-q1',
              question: 'What does a Credit Note do to AR?',
              options: ['Increases AR', 'Decreases AR', 'No effect', 'Converts to liability'],
              correctAnswer: 1,
              explanation: 'A Credit Note decreases AR as it reduces the amount the customer owes.'
            }
          ]
        }
      },
      {
        id: 'd-m4',
        title: 'Payment Scenarios',
        description: 'Handling Overpayment, Short payment, Duplicate payment',
        estimatedMinutes: 35,
        content: [
          { type: 'heading', content: 'Common Payment Scenarios' },
          { type: 'definition', content: 'Overpayment: Customer pays more than invoice amount. Creates unapplied cash or credit.' },
          { type: 'definition', content: 'Short Payment: Customer pays less than invoice amount. Requires investigation (deductions, discounts).' },
          { type: 'definition', content: 'Duplicate Payment: Customer pays same invoice twice. Requires refund or credit.' },
          { type: 'example', content: 'Invoice: $1,000. Payment received: $950. Short payment of $50 - investigate if valid discount or deduction.' }
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'd-m4-q1',
              question: 'What creates unapplied cash?',
              options: ['Short payment', 'Overpayment', 'Exact payment', 'No payment'],
              correctAnswer: 1,
              explanation: 'Overpayment creates unapplied cash that needs to be resolved.'
            },
            {
              id: 'd-m4-q2',
              question: 'How should duplicate payments be handled?',
              options: ['Ignore them', 'Refund or credit to customer', 'Apply to next invoice', 'Write off'],
              correctAnswer: 1,
              explanation: 'Duplicate payments should be refunded to the customer or applied as credit.'
            }
          ]
        }
      },
      {
        id: 'd-m5',
        title: 'FX Gain/Loss, WHT, Refunds',
        description: 'Advanced cash application concepts',
        estimatedMinutes: 35,
        content: [
          { type: 'heading', content: 'Foreign Exchange (FX) Gain/Loss' },
          { type: 'paragraph', content: 'When invoicing and payment are in different currencies, exchange rate fluctuations create gains or losses.' },
          { type: 'heading', content: 'Withholding Tax (WHT)' },
          { type: 'paragraph', content: 'Some jurisdictions require customers to withhold a portion of payment as tax. This is remitted directly to tax authorities.' },
          { type: 'heading', content: 'Refunds' },
          { type: 'paragraph', content: 'When a customer has a credit balance, refund may be issued via check, wire, or credit against future purchases.' }
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'd-m5-q1',
              question: 'When does FX gain/loss occur?',
              options: ['Same currency transactions', 'Multi-currency transactions', 'Cash transactions', 'Credit transactions'],
              correctAnswer: 1,
              explanation: 'FX gains or losses occur when transactions involve different currencies.'
            }
          ]
        }
      },
      {
        id: 'd-m6',
        title: 'Ageing Buckets & Open Items',
        description: 'Managing AR aging and open items',
        estimatedMinutes: 30,
        content: [
          { type: 'heading', content: 'AR Aging Buckets' },
          { type: 'list', content: 'Standard Aging Categories', items: [
            'Current (0-30 days)',
            '31-60 days past due',
            '61-90 days past due',
            '91-120 days past due',
            '120+ days past due'
          ]},
          { type: 'heading', content: 'Open Items' },
          { type: 'paragraph', content: 'Open items are unpaid invoices or unapplied payments. Efficient management reduces aging and improves cash flow.' }
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'd-m6-q1',
              question: 'What are open items?',
              options: ['Paid invoices', 'Unpaid invoices or unapplied payments', 'Closed accounts', 'Credit notes only'],
              correctAnswer: 1,
              explanation: 'Open items are unpaid invoices or unapplied payments requiring resolution.'
            }
          ]
        }
      },
      {
        id: 'd-m7',
        title: 'Reporting Activities',
        description: 'Key reports in cash application',
        estimatedMinutes: 25,
        content: [
          { type: 'heading', content: 'Essential Reports' },
          { type: 'list', content: 'Cash Application Reports', items: [
            'Daily cash receipts summary',
            'Unapplied cash report',
            'AR aging report',
            'Cash application productivity report',
            'Exception and deduction report',
            'Collection performance report'
          ]}
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'd-m7-q1',
              question: 'Which report shows payments not matched to invoices?',
              options: ['Aging report', 'Unapplied cash report', 'Productivity report', 'Collection report'],
              correctAnswer: 1,
              explanation: 'The Unapplied Cash Report shows payments that haven\'t been matched to invoices.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'course-e',
    title: 'Automation in Cash App & Excel',
    description: 'Learn how to automate cash application processes using modern tools, DataLoad, and Excel VBA for maximum efficiency.',
    shortDescription: 'Automate processes with Excel VBA & tools',
    icon: '🤖',
    color: 'from-pink-500 to-rose-400',
    estimatedHours: 6,
    modules: [
      {
        id: 'e-m1',
        title: 'Automation Benefits',
        description: 'Why automate cash application processes',
        estimatedMinutes: 25,
        content: [
          { type: 'heading', content: 'Benefits of Automation' },
          { type: 'list', content: 'Key Advantages', items: [
            'Faster payment processing and application',
            'Reduced manual errors and exceptions',
            'Lower operational costs',
            'Improved employee productivity',
            'Better customer satisfaction with faster credits',
            'Enhanced reporting and visibility'
          ]},
          { type: 'paragraph', content: 'Modern cash application teams can process 10x more transactions with automation.' }
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'e-m1-q1',
              question: 'What is a key benefit of automation?',
              options: ['More manual work', 'Increased errors', 'Faster processing', 'Higher costs'],
              correctAnswer: 2,
              explanation: 'Automation enables faster processing of payments and applications.'
            }
          ]
        }
      },
      {
        id: 'e-m2',
        title: 'Bulk Payment Creation',
        description: 'Processing multiple payments efficiently',
        estimatedMinutes: 30,
        content: [
          { type: 'heading', content: 'Bulk Processing' },
          { type: 'paragraph', content: 'Instead of processing one payment at a time, bulk processing handles multiple payments simultaneously using templates and automation tools.' },
          { type: 'list', content: 'Bulk Processing Steps', items: [
            'Prepare payment data in template format',
            'Validate data for accuracy',
            'Upload to processing system',
            'Review exceptions',
            'Confirm and post payments'
          ]}
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'e-m2-q1',
              question: 'What is the advantage of bulk processing?',
              options: ['Slower processing', 'Handle multiple payments at once', 'More errors', 'Manual entry for each'],
              correctAnswer: 1,
              explanation: 'Bulk processing handles multiple payments simultaneously, improving efficiency.'
            }
          ]
        }
      },
      {
        id: 'e-m3',
        title: 'WHT Auto Adjustments',
        description: 'Automating withholding tax calculations',
        estimatedMinutes: 30,
        content: [
          { type: 'heading', content: 'Automating WHT' },
          { type: 'paragraph', content: 'Withholding tax rules can be programmed into systems to automatically calculate and apply WHT deductions based on customer country and transaction type.' },
          { type: 'example', content: 'System automatically applies 10% WHT for payments from certain jurisdictions, creating the appropriate deduction entry.' }
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'e-m3-q1',
              question: 'What can be automated for WHT?',
              options: ['Nothing', 'Only recording', 'Calculation and application', 'Customer communication only'],
              correctAnswer: 2,
              explanation: 'WHT calculation and application can be automated based on configured rules.'
            }
          ]
        }
      },
      {
        id: 'e-m4',
        title: 'Payment & Credit Auto Allocation',
        description: 'Automatic matching of payments to invoices',
        estimatedMinutes: 35,
        content: [
          { type: 'heading', content: 'Auto-Matching' },
          { type: 'paragraph', content: 'Systems can automatically match payments to invoices using various criteria like remittance info, amount matching, and customer history.' },
          { type: 'list', content: 'Matching Logic', items: [
            'Exact amount match',
            'Invoice number matching from remittance',
            'FIFO (First In, First Out) allocation',
            'Customer payment pattern analysis',
            'AI-based matching for complex scenarios'
          ]}
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'e-m4-q1',
              question: 'What does FIFO allocation mean?',
              options: ['Apply to newest first', 'Apply to oldest first', 'Apply randomly', 'Apply to largest first'],
              correctAnswer: 1,
              explanation: 'FIFO (First In, First Out) applies payments to the oldest invoices first.'
            }
          ]
        }
      },
      {
        id: 'e-m5',
        title: 'DataLoad & Excel VBA',
        description: 'Using tools for automation',
        estimatedMinutes: 40,
        content: [
          { type: 'heading', content: 'DataLoad' },
          { type: 'paragraph', content: 'DataLoad is a tool that allows bulk data entry into ERP systems like Oracle. It reads from Excel and enters data automatically, saving hours of manual work.' },
          { type: 'heading', content: 'Excel VBA Automation' },
          { type: 'paragraph', content: 'Visual Basic for Applications (VBA) in Excel can automate repetitive tasks like data formatting, report generation, and file manipulation.' },
          { type: 'example', content: 'VBA macro to format payment file: Remove extra columns, standardize customer names, validate amounts, and prepare for upload.' },
          { type: 'list', content: 'Common VBA Uses', items: [
            'Data cleaning and transformation',
            'Report generation and formatting',
            'File merging and splitting',
            'Email automation for sending reports',
            'Validation and error checking'
          ]}
        ],
        quiz: {
          passingScore: 70,
          questions: [
            {
              id: 'e-m5-q1',
              question: 'What is DataLoad used for?',
              options: ['Email sending', 'Bulk data entry into ERP systems', 'Video editing', 'Web browsing'],
              correctAnswer: 1,
              explanation: 'DataLoad is used for bulk data entry into ERP systems like Oracle.'
            },
            {
              id: 'e-m5-q2',
              question: 'What does VBA stand for?',
              options: ['Visual Basic Application', 'Visual Basic for Applications', 'Very Basic Automation', 'Video Based Animation'],
              correctAnswer: 1,
              explanation: 'VBA stands for Visual Basic for Applications, used for automation in Microsoft Office.'
            }
          ]
        }
      }
    ]
  }
];
