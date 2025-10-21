const { useState } = React;
const { Info, DollarSign, TrendingUp, AlertCircle, CheckCircle, X, ChevronRight, ChevronDown, ChevronUp } = window.lucide;

function SelfFinancingStateEducation() {
  const [activeTab, setActiveTab] = useState('basics');
  const [animationStep, setAnimationStep] = useState(0);
  const [selectedMyth, setSelectedMyth] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);

  const tabs = [
    { id: 'basics', label: 'Core Principles' },
    { id: 'operations', label: 'How It Works' },
    { id: 'myths', label: 'Myths vs Reality' },
    { id: 'constraints', label: 'Real Constraints' },
    { id: 'policy', label: 'Policy Implications' }
  ];

  const corePrinciples = [
    {
      title: 'Government Creates Money First',
      description: 'The NZ Government must spend (or lend) money into existence before it can collect it through taxes or bond sales.',
      details: 'When government spends, the RBNZ credits commercial bank reserve accounts (settlement cash) and banks credit recipients\' deposits. This is NEW money creation - not from prior taxation.',
      keyPoint: 'Spending logically precedes taxation'
    },
    {
      title: 'Taxes Destroy Money',
      description: 'Tax payments don\'t "fund" anything - they destroy money that government previously created.',
      details: 'When you pay tax, your commercial bank deposit is destroyed, and settlement cash moves from the bank\'s ESAS account to the Crown Settlement Account, reducing the settlement cash level.',
      keyPoint: 'Taxes drive currency demand and control inflation'
    },
    {
      title: 'Bonds Are Monetary Operations',
      description: 'Government bonds aren\'t "borrowing" - they offer an interest-bearing alternative to settlement cash.',
      details: 'Bond sales drain settlement cash from the banking system to help RBNZ hit its OCR target. The government isn\'t financially constrained by bond markets.',
      keyPoint: 'Bonds manage liquidity, not fund spending'
    },
    {
      title: 'Real Resources Are the Constraint',
      description: 'Government can\'t run out of NZ dollars, but it CAN run out of real resources like workers, materials, and productive capacity.',
      details: 'The question isn\'t "Can we afford it?" but rather "Do we have the people, materials, and capacity to do it without causing inflation?"',
      keyPoint: 'Inflation is the key constraint, not finances'
    }
  ];

  const myths = [
    {
      id: 1,
      myth: 'Taxes fund government spending',
      reality: 'Government must spend or lend money into existence before it can tax. Taxes destroy money; they don\'t fund anything.',
      explanation: 'Operationally, Treasury runs a Start of Day Advance from the Crown Settlement Account - NEW money created by RBNZ. Tax receipts arrive later via the End of Day Sweep, offsetting (but not funding) the advance.',
      impact: 'high'
    },
    {
      id: 2,
      myth: 'Government debt is like household debt',
      reality: 'Government "debt" is private sector savings in NZ dollars. Government cannot become insolvent in its own currency.',
      explanation: 'When government runs a deficit, it adds net financial assets to the private sector. Government bonds are just interest-bearing NZ dollars held by the private sector.',
      impact: 'high'
    },
    {
      id: 3,
      myth: 'We need to balance the budget',
      reality: 'Government surplus = Private sector deficit. Sustained surpluses drain private sector savings.',
      explanation: 'Sectoral balances must sum to zero. If government runs a surplus (taxes > spending), the private sector must run a deficit (spending > income) unless offset by foreign sector.',
      impact: 'high'
    },
    {
      id: 4,
      myth: 'Government borrowing crowds out private investment',
      reality: 'Banks create money when they lend. Reserve availability doesn\'t constrain lending.',
      explanation: 'The "loanable funds" model is incorrect. Banks aren\'t reserve-constrained. RBNZ accommodates reserve demand to maintain the OCR.',
      impact: 'medium'
    },
    {
      id: 5,
      myth: 'Money printing causes hyperinflation',
      reality: 'Inflation requires excess aggregate demand relative to real productive capacity.',
      explanation: 'NZ\'s settlement cash increased from $8B to over $50B during COVID without hyperinflation. What matters is whether spending exceeds the economy\'s productive capacity.',
      impact: 'medium'
    }
  ];

  const constraints = [
    {
      category: 'Real Resource Constraints',
      color: 'red',
      items: [
        { name: 'Labor availability', detail: 'Skilled workers, unemployment rate, wage inflation' },
        { name: 'Materials & supplies', detail: 'Physical resources, supply chain capacity' },
        { name: 'Technology & know-how', detail: 'Technical capacity to deliver projects' },
        { name: 'Productive capacity', detail: 'Overall economic capacity utilization' }
      ],
      importance: 'PRIMARY - These are the genuine constraints'
    },
    {
      category: 'Inflation Constraint',
      color: 'orange',
      items: [
        { name: 'Demand-pull inflation', detail: 'Spending beyond productive capacity' },
        { name: 'Cost-push inflation', detail: 'Supply shocks, import prices' },
        { name: 'Exchange rate effects', detail: 'Impact on import prices' },
        { name: 'Inflation expectations', detail: 'Wage-price spirals' }
      ],
      importance: 'PRIMARY - The key macroeconomic constraint'
    },
    {
      category: 'Institutional Constraints',
      color: 'yellow',
      items: [
        { name: 'Public Finance Act', detail: 'Legal fiscal rules and targets' },
        { name: 'RBNZ independence', detail: 'Limited fiscal-monetary coordination' },
        { name: 'Self-imposed debt targets', detail: 'Political constraints, changeable' },
        { name: 'Parliamentary appropriations', detail: 'Budget approval processes' }
      ],
      importance: 'SECONDARY - Political choices, not economic necessities'
    },
    {
      category: 'Political Economy Constraints',
      color: 'blue',
      items: [
        { name: 'Bond market perceptions', detail: 'Market confidence, interest rates' },
        { name: 'Public understanding', detail: 'Voter beliefs about government finance' },
        { name: 'International comparisons', detail: 'OECD norms, credit ratings' },
        { name: 'Political capital', detail: 'Will to challenge conventional wisdom' }
      ],
      importance: 'SECONDARY - Changeable through education and leadership'
    }
  ];

  const operationsSteps = [
    {
      time: 'Start of Day',
      title: 'Government Spending Creates Money',
      description: 'Treasury departments request cash. RBNZ creates NEW settlement cash and advances it from Crown Settlement Account to Westpac\'s ESAS account.',
      flow: 'RBNZ → Crown Settlement Account → Bank Settlement Cash (CREATION)',
      keyInsight: 'This is newly created money, not from taxes or borrowing'
    },
    {
      time: 'During Day',
      title: 'Money Flows to Recipients',
      description: 'Departments pay salaries, contracts, benefits. Commercial banks credit recipients\' deposit accounts. Settlement cash level increases in banking system.',
      flow: 'Government Departments → Commercial Banks → Recipients (INJECTION)',
      keyInsight: 'Private sector gains both deposits and net financial assets'
    },
    {
      time: 'Tax Payments',
      title: 'Taxes Destroy Money',
      description: 'Citizens pay tax from their bank deposits. Banks destroy those deposits and transfer settlement cash to Crown account. Tax dollars NEVER reach the Crown - they\'re destroyed!',
      flow: 'Taxpayer Deposit (DESTROYED) → Settlement Cash moves to Crown (DRAIN)',
      keyInsight: 'Your tax payment destroys commercial bank money'
    },
    {
      time: 'End of Day',
      title: 'End of Day Sweep',
      description: 'All Crown bank balances swept to Crown Settlement Account. Settlement cash transfers from Westpac to Crown account, reducing settlement cash level.',
      flow: 'Crown Bank Accounts → Crown Settlement Account (OFFSET)',
      keyInsight: 'This offsets the morning advance, completing the daily cycle'
    },
    {
      time: 'RBNZ Response',
      title: 'RBNZ Maintains OCR Target',
      description: 'Net government cash influence (spending minus taxation) affects settlement cash. RBNZ conducts open market operations to maintain Official Cash Rate target.',
      flow: 'RBNZ adjusts via repos, FX swaps, other operations',
      keyInsight: 'Settlement cash quantity is whatever RBNZ decides'
    }
  ];

  const policyImplications = [
    {
      area: 'Infrastructure Investment',
      wrong: 'We can\'t afford to upgrade infrastructure',
      right: 'Do we have the workers, materials, and technology? If yes, we can fund it.',
      example: 'NZ infrastructure deficit: not a money problem, a resource mobilization problem'
    },
    {
      area: 'Public Services',
      wrong: 'We need surpluses to afford better healthcare',
      right: 'Do we have doctors, nurses, facilities? Hiring them creates income and economic activity.',
      example: 'Labor shortages are real constraints; government "debt" is not'
    },
    {
      area: 'Climate Action',
      wrong: 'Climate investment will bankrupt the country',
      right: 'Can we mobilize resources for green transition without excess inflation?',
      example: 'Real question: Do we have renewable energy tech, construction capacity, skilled labor?'
    },
    {
      area: 'Economic Downturns',
      wrong: 'Government must tighten belt during recessions',
      right: 'Government should deficit spend counter-cyclically when private sector contracts',
      example: 'COVID response showed government can mobilize resources when needed'
    }
  ];

  // Component JSX continues...
  return React.createElement('div', { className: 'w-full min-h-screen' },
    React.createElement('div', { className: 'max-w-7xl mx-auto p-6 bg-gradient-to-br from-slate-50 to-blue-50' },
      // Header and rest of component...
      // Due to character limits, I'll provide the complete file in the next message
    )
  );
}

ReactDOM.render(React.createElement(SelfFinancingStateEducation), document.getElementById('root'));
