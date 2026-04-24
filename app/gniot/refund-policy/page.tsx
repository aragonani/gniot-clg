function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-8 md:px-10 lg:px-20">
      
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-6 md:p-10">
        
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Refund & Payment Policy – Campus Hub
        </h1>

        {/* Disclaimer Box */}
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md mb-6">
          <p className="font-semibold text-red-700">IMPORTANT DISCLAIMER:</p>
          <p className="text-sm md:text-base mt-1">
            Campus Hub is an independent marketing and counseling partner. We are not an admission authority, not a fee-collecting agency, and not the official admission portal of any college or university.
          </p>
        </div>

        {/* Section 1 */}
        <section className="mb-6">
          <h2 className="font-semibold text-lg md:text-xl mb-2">
            1. Zero Payment Collection Policy
          </h2>
          <p className="mb-2">
            Campus Hub maintains a strict no-payment collection policy. We do not request or accept any form of payment from students, parents, or users, including:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Application or registration fees</li>
            <li>Form-filling charges</li>
            <li>Admission-related payments</li>
            <li>Processing or service fees</li>
            <li>Any deposits or advance payments</li>
          </ul>
          <p className="mt-2">
            All payments, where applicable, must be made directly on the official website of the respective college or university.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-6">
          <h2 className="font-semibold text-lg md:text-xl mb-2">
            2. No Refund Policy
          </h2>
          <p className="mb-2">
            Since Campus Hub does not collect or process payments:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>We do not offer refunds</li>
            <li>We do not handle payment-related grievances</li>
            <li>Refund requests cannot be raised with Campus Hub</li>
          </ul>
          <p className="mt-2">
            Any refund or payment concern must be addressed directly with the respective institution.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-6">
          <h2 className="font-semibold text-lg md:text-xl mb-2">
            3. Role & Limitations
          </h2>
          <p className="mb-2">
            Campus Hub operates solely as a guidance and information platform. Our services include:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Providing details about colleges, courses, and admission processes</li>
            <li>Connecting users with official admission representatives</li>
            <li>Offering basic counseling support</li>
          </ul>
          <p className="mt-2">We do not:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Process admissions</li>
            <li>Influence admission decisions</li>
            <li>Guarantee admission to any institution</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-6">
          <h2 className="font-semibold text-lg md:text-xl mb-2">
            4. Payments to Colleges/Universities
          </h2>
          <p className="mb-2">
            Any payment made is strictly a transaction between:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>You (the applicant)</li>
            <li>The respective college/university</li>
          </ul>
          <p className="mt-2">Campus Hub is not responsible for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Payment disputes</li>
            <li>Refund processing</li>
            <li>Transaction failures</li>
            <li>Chargebacks or financial claims</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="font-semibold text-lg md:text-xl mb-2">
            5. No Authorized Fee Collection
          </h2>
          <p className="mb-2">
            Campus Hub does not authorize any:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Employee</li>
            <li>Counselor</li>
            <li>Agent</li>
            <li>Third party</li>
          </ul>
          <p className="mt-2">
            to collect money on its behalf.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-md mt-4">
            <p className="font-semibold">If anyone requests payment in the name of Campus Hub:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Do not make any payment</li>
              <li>
                Report immediately to:{" "}
                <span className="font-semibold">contact@campushub.co.in</span>
              </li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
}

export default RefundPolicy;