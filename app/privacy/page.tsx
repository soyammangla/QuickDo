export default function Page() {
  return (
    <section className="max-w-[70%] mx-auto py-16 text-white">
      <h2 className="text-44 font-bold text-center mb-8">Privacy Policy</h2>
      <p className="text-gray-300 mb-6 text-center">
        Last Updated: September 6, 2025
      </p>

      <div className="space-y-8 text-gray-300">
        {/* Intro */}
        <p>
          At <span className="font-semibold text-white">QuickDo</span>, your
          privacy is very important to us. This Privacy Policy explains how we
          collect, use, and safeguard your information when you use our
          application and services.
        </p>

        {/* Information Collection */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-3">
            1. Information We Collect
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-white">
                Personal Information:
              </span>{" "}
              Such as your name, email address, and account details when you
              sign up.
            </li>
            <li>
              <span className="font-medium text-white">Usage Data:</span>{" "}
              Details about how you use QuickDo, including features accessed and
              time spent.
            </li>
            <li>
              <span className="font-medium text-white">
                Device Information:
              </span>{" "}
              Information about your device, operating system, and browser type.
            </li>
          </ul>
        </div>

        {/* Usage */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-3">
            2. How We Use Your Information
          </h3>
          <p>
            We use the collected data to improve our services, provide customer
            support, personalize your experience, and ensure security of your
            information.
          </p>
        </div>

        {/* Security */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-3">
            3. Data Security
          </h3>
          <p>
            We implement industry-standard measures such as encryption and
            secure servers to protect your data. However, no system is 100%
            secure, and we cannot guarantee absolute protection.
          </p>
        </div>

        {/* Sharing */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-3">
            4. Sharing of Information
          </h3>
          <p>
            We do not sell your personal information. Data may be shared with
            trusted service providers to help operate QuickDo, under strict
            confidentiality agreements.
          </p>
        </div>

        {/* Rights */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-3">
            5. Your Rights
          </h3>
          <p>
            You have the right to access, update, or delete your personal data.
            You may also opt-out of marketing communications at any time.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-3">
            6. Contact Us
          </h3>
          <p>
            If you have any questions about this Privacy Policy, you can contact
            us directly at{" "}
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
