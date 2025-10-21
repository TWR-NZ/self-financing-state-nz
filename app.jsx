import React, { useState } from 'react';
import { Info, DollarSign, TrendingUp, AlertCircle, CheckCircle, X, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

export default function SelfFinancingStateEducation() {
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

  return (
    <div className="w-full min-h-screen">
      <div className="max-w-7xl mx-auto p-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <DollarSign className="w-8 h-8 text-blue-600" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              The Self-Financing State
            </h1>
            <p className="text-lg text-gray-600">
              Understanding how government finance actually works in New Zealand
            </p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm text-gray-700">
                <strong>Based on RBNZ and Treasury operational documentation</strong><br/>
                This interactive tool explains the operational realities of New Zealand's monetary system
                as documented by the Reserve Bank of New Zealand and Treasury, moving beyond myths to
                understand how government spending, taxation, and bonds actually function.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg mb-6 overflow-hidden">
        <div className="flex border-b overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white border-b-2 border-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'basics' && (
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Core Principles of the Self-Financing State</h2>
                <p className="text-gray-600">
                  These principles describe how New Zealand's monetary system actually operates, as documented by the Reserve Bank of New Zealand.
                </p>
              </div>

              {corePrinciples.map((principle, idx) => (
                <div key={idx} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{principle.title}</h3>
                      <p className="text-gray-700 mb-3">{principle.description}</p>
                      <div className="bg-white rounded-lg p-4 mb-3">
                        <p className="text-sm text-gray-600">{principle.details}</p>
                      </div>
                      <div className="flex items-center gap-2 text-blue-700 font-medium">
                        <CheckCircle className="w-5 h-5" />
                        <span className="text-sm">{principle.keyPoint}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="mt-6 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Info className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Why This Matters</h4>
                    <p className="text-gray-700">
                      Understanding these principles changes how we think about fiscal policy.
                      The question isn't "Can we afford it?" but "Do we have the real resources to do it
                      without causing inflation?" This shifts policy debates from artificial financial
                      constraints to genuine economic considerations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'operations' && (
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">How Government Spending Actually Works</h2>
                <p className="text-gray-600 mb-4">
                  The daily cycle of government spending, taxation, and monetary operations in New Zealand.
                </p>
              </div>

              <div className="bg-gray-100 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700">Daily Cycle Step:</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setAnimationStep(Math.max(0, animationStep - 1))}
                      className="px-3 py-1 bg-white rounded border hover:bg-gray-50 text-sm"
                      disabled={animationStep === 0}
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setAnimationStep((animationStep + 1) % operationsSteps.length)}
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                    >
                      Next
                    </button>
                  </div>
                </div>
                <div className="flex gap-2">
                  {operationsSteps.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setAnimationStep(idx)}
                      className={`flex-1 h-2 rounded-full transition-colors ${
                        idx === animationStep ? 'bg-blue-500' : idx < animationStep ? 'bg-blue-300' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-row gap-6 items-start">
                <div className="w-1/2 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl p-8 shadow-xl">
                  <div className="text-sm font-medium opacity-90 mb-2">
                    {operationsSteps[animationStep].time}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {operationsSteps[animationStep].title}
                  </h3>
                  <p className="text-lg mb-4 opacity-95">
                    {operationsSteps[animationStep].description}
                  </p>
                  <div className="bg-white/20 rounded-lg p-4 mb-4 backdrop-blur">
                    <div className="text-sm font-medium mb-2">Money Flow:</div>
                    <div className="font-mono text-sm">
                      {operationsSteps[animationStep].flow}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-yellow-400/20 rounded-lg p-3">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium text-sm">
                      Key Insight: {operationsSteps[animationStep].keyInsight}
                    </span>
                  </div>
                </div>

                <div className="w-1/2 bg-white rounded-lg p-6 border-2 border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-6 text-center">Settlement Cash System</h4>
                  <div className="flex flex-col items-center gap-4">
                    <div className={`w-full max-w-md p-4 rounded-lg border-2 text-center transition-all ${
                      animationStep === 0 || animationStep === 4 ? 'bg-blue-100 border-blue-500 scale-105 shadow-lg' : 'bg-gray-100 border-gray-300'
                    }`}>
                      <div className="font-bold">Crown Settlement Account</div>
                      <div className="text-sm text-gray-600">(at RBNZ)</div>
                    </div>

                    <div className={`transition-colors ${
                      animationStep === 0 ? 'text-blue-500' : 
                      animationStep === 3 ? 'text-purple-500' : 'text-gray-400'
                    }`}>
                      {animationStep === 3 ? (
                        <ChevronUp className="w-8 h-8" />
                      ) : (
                        <ChevronDown className="w-8 h-8" />
                      )}
                    </div>

                    <div className={`w-full max-w-md p-4 rounded-lg border-2 text-center transition-all ${
                      animationStep === 1 || animationStep === 3 ? 'bg-green-100 border-green-500 scale-105 shadow-lg' : 'bg-gray-100 border-gray-300'
                    }`}>
                      <div className="font-bold">Settlement Cash Level</div>
                      <div className="text-sm text-gray-600">(Bank ESAS Accounts)</div>
                    </div>

                    <div className={`transition-colors ${
                      animationStep === 1 ? 'text-green-500' : 
                      animationStep === 2 ? 'text-red-500' : 'text-gray-400'
                    }`}>
                      {animationStep === 2 ? (
                        <ChevronUp className="w-8 h-8" />
                      ) : (
                        <ChevronDown className="w-8 h-8" />
                      )}
                    </div>

                    <div className={`w-full max-w-md p-4 rounded-lg border-2 text-center transition-all ${
                      animationStep === 2 ? 'bg-red-100 border-red-500 scale-105 shadow-lg' : 'bg-gray-100 border-gray-300'
                    }`}>
                      <div className="font-bold">Private Sector</div>
                      <div className="text-sm text-gray-600">(Commercial Bank Deposits)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'myths' && (
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Common Myths vs Operational Reality</h2>
                <p className="text-gray-600">
                  Click on each myth to see why it's incorrect and what the actual operational reality is.
                </p>
              </div>

              <div className="grid gap-4">
                {myths.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg border-2 border-gray-200 overflow-hidden">
                    <button
                      onClick={() => setSelectedMyth(selectedMyth === item.id ? null : item.id)}
                      className="w-full p-4 flex items-start gap-4 hover:bg-gray-50 transition-colors text-left"
                    >
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                        item.impact === 'high' ? 'bg-red-100' : 'bg-yellow-100'
                      }`}>
                        <X className={`w-6 h-6 ${item.impact === 'high' ? 'text-red-600' : 'text-yellow-600'}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1">MYTH: {item.myth}</h3>
                        <p className="text-sm text-green-700 font-medium">REALITY: {item.reality}</p>
                      </div>
                      <ChevronRight className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                        selectedMyth === item.id ? 'rotate-90' : ''
                      }`} />
                    </button>
                    
                    {selectedMyth === item.id && (
                      <div className="p-4 bg-gray-50 border-t-2 border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-2">Explanation:</h4>
                        <p className="text-gray-700 mb-3">{item.explanation}</p>
                        <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-500">
                          <p className="text-sm text-gray-700">
                            <strong>Why this matters:</strong> Understanding this operational reality changes
                            how we evaluate fiscal policy and public investment decisions.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-300">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  The Bottom Line
                </h3>
                <p className="text-gray-700">
                  These myths persist because they match our intuition from household finance, but government
                  finance operates fundamentally differently. As the monopoly issuer of NZ dollars, the government
                  faces different constraints than currency users. Understanding this distinction is essential for
                  sound economic policy.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'constraints' && (
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">What Actually Constrains Government?</h2>
                <p className="text-gray-600">
                  If government doesn't face financial constraints in its own currency, what DOES constrain it?
                </p>
              </div>

              {constraints.map((constraint, idx) => (
                <div key={idx} className="bg-white rounded-lg border-2 overflow-hidden">
                  <button
                    onClick={() => setExpandedSection(expandedSection === idx ? null : idx)}
                    className={`w-full p-5 flex items-center justify-between hover:bg-gray-50 transition-colors border-l-4 ${
                      constraint.color === 'red' ? 'border-red-500' :
                      constraint.color === 'orange' ? 'border-orange-500' :
                      constraint.color === 'yellow' ? 'border-yellow-500' :
                      'border-blue-500'
                    }`}
                  >
                    <div className="text-left flex-1">
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{constraint.category}</h3>
                      <p className={`text-sm font-medium ${
                        constraint.importance.startsWith('PRIMARY') ? 'text-red-600' : 'text-blue-600'
                      }`}>
                        {constraint.importance}
                      </p>
                    </div>
                    <ChevronRight className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${
                      expandedSection === idx ? 'rotate-90' : ''
                    }`} />
                  </button>

                  {expandedSection === idx && (
                    <div className="p-5 bg-gray-50 border-t-2">
                      <div className="space-y-3">
                        {constraint.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="bg-white rounded-lg p-4 border">
                            <h4 className="font-bold text-gray-900 mb-1">{item.name}</h4>
                            <p className="text-sm text-gray-600">{item.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-6 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-300">
                <h3 className="font-bold text-gray-900 mb-3">The Hierarchy of Constraints</h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong className="text-red-600">Primary constraints</strong> (real resources and inflation)
                    are genuine economic limits that can't be changed by legislation or belief.
                  </p>
                  <p>
                    <strong className="text-blue-600">Secondary constraints</strong> (institutional and political)
                    are human-created rules that can be changed through legislation, education, and leadership.
                  </p>
                  <p className="pt-2 border-t">
                    Confusing these categories leads to poor policy: treating changeable institutional constraints
                    as immutable economic laws, while ignoring genuine resource and inflation constraints.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'policy' && (
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Policy Implications</h2>
                <p className="text-gray-600">
                  How understanding the self-financing state changes policy debates across key areas.
                </p>
              </div>

              {policyImplications.map((policy, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 border-2 border-gray-200">
                  <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                    {policy.area}
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                      <div className="flex items-center gap-2 mb-2">
                        <X className="w-5 h-5 text-red-600" />
                        <span className="font-bold text-red-900">Old Thinking</span>
                      </div>
                      <p className="text-gray-700 italic">"{policy.wrong}"</p>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="font-bold text-green-900">New Framing</span>
                      </div>
                      <p className="text-gray-700 font-medium">"{policy.right}"</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Example:</strong> {policy.example}
                    </p>
                  </div>
                </div>
              ))}

              <div className="mt-6 p-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl shadow-lg">
                <h3 className="font-bold text-xl mb-3">The Key Policy Questions</h3>
                <div className="space-y-2 text-sm">
                  <p>✓ Do we have the real resources (people, materials, technology)?</p>
                  <p>✓ Will this investment increase productive capacity?</p>
                  <p>✓ Can we implement without excessive inflation?</p>
                  <p>✓ Does this serve genuine public purpose?</p>
                  <p className="pt-2 border-t border-white/30 mt-3">
                    ✗ "Can we afford it?" is the WRONG question for a currency-issuing government
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 text-sm text-gray-600">
        <h4 className="font-bold text-gray-900 mb-2">Sources & Further Reading</h4>
        <ul className="space-y-1">
          <li>• RBNZ: "Money Creation in New Zealand" (2023)</li>
          <li>• RBNZ: "Liquidity Management in the New Zealand Banking System" (2004)</li>
          <li>• Karen Silk (RBNZ Assistant Governor): "Monetary Policy Implementation" (2022)</li>
          <li>• NZ Treasury: "Fiscal Policy and the Crown Balance Sheet" analysis</li>
          <li>• UCL Institute: "The Self-Financing State: An Institutional Analysis" (2022)</li>
          <li>• Bank of England: "Money Creation in the Modern Economy" (2014)</li>
        </ul>
      </div>
      </div>
    </div>
  );
}
