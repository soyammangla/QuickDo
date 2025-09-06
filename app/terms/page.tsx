export default function Page() {
  return (
    <section className="max-w-[70%] mx-auto py-16 text-white">
      <h2 className="text-4xl font-bold text-center mb-8">
        Terms & Conditions
      </h2>
      <p className="text-gray-300 mb-6 text-center">
        Last Updated: September 6, 2025
      </p>

      <div className="space-y-8 text-gray-300">
        {/* Introduction */}
        <p>
          Welcome to <span className="font-semibold text-white">QuickDo</span>!
          By using our application or services, you agree to comply with and be
          bound by the following terms and conditions. Please read them
          carefully.
        </p>

        {/* Use of Service */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-3">
            1. Use of Service
          </h3>
          <p>
            QuickDo provides task management tools to help you organize and
            manage your projects efficiently. You agree to use the service for
            lawful purposes only.
          </p>
        </div>

        {/* Account */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-3">
            2. Account Responsibilities
          </h3>
          <p>
            You are responsible for maintaining the confidentiality of your
            account information and password. You agree to notify us immediately
            of any unauthorized use of your account.
          </p>
        </div>

        {/* Intellectual Property */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-3">
            3. Intellectual Property
          </h3>
          <p>
            All content, design, and software related to QuickDo are our
            intellectual property and are protected by copyright and other
            applicable laws.
          </p>
        </div>

        {/* Restrictions */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-3">
            4. Restrictions
          </h3>
          <p>
            You may not copy, modify, distribute, sell, or lease any part of
            QuickDo, use it for commercial purposes without permission, or
            reverse engineer any part of the service.
          </p>
        </div>

        {/* Termination */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-3">
            5. Termination
          </h3>
          <p>
            We reserve the right to suspend or terminate your account if you
            violate these terms or engage in any activity that disrupts the
            service.
          </p>
        </div>

        {/* Disclaimer */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-3">
            6. Disclaimer
          </h3>
          <p>
            QuickDo is provided "as is" without warranties of any kind. We are
            not responsible for data loss or service interruptions.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-3">
            7. Contact Us
          </h3>
          <p>
            For any questions regarding these Terms & Conditions, contact us at{" "}
            <a
              href="mailto:soyam@example.com"
              className="text-blue-500 hover:underline"
            >
              soyamtech627@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
