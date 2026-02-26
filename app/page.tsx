import Video from "next-video";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
              Change Made Easy
              <span className="block">
                <p>
                  with <b className="text-primary-600">UpDate</b>
                </p>
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              {`Leave the churn to making butter. UpDate makes it smooth to change information for 
              all subscriptions at once, so you won't have to worry about being forgotten in the mix.`}
            </p>
            {/* <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#video"
                className="rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Watch Demo
              </a>
              <a
                href="/problem-solution"
                className="text-sm font-semibold leading-6 text-zinc-900 dark:text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div> */}
          </div>
        </div>
      </section>
      <section id="video" className="bg-zinc-50 py-20 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              A word from our CEO
            </h2>
          </div>
          <div className="mt-12">
            <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-xl bg-zinc-200 shadow-2xl dark:bg-zinc-800">
              <iframe
                src="https://player.mux.com/S7012TsuPmJ02xyppo7DB02BKdUEC3lHCnl01j7PivXPx4M"
                style={{ width: "100%", border: "none", aspectRatio: "16/9" }}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Why Choose UpDate?
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {/* Feature 1 */}
            <div className="rounded-2xl border inline-flex items-center border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex ml-10 my-4 p-4 h-16 w-16 items-center justify-center rounded-lg bg-primary-600 text-white">
                <svg
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>
              </div>
              <div className="m-4 mr-10">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  Minimize Failed Transactions
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  Make change easy across accounts for your users. We implement
                  modern solutions to account management, so managing payment
                  information stays easy.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl border inline-flex items-center border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex ml-10 my-4 p-4 h-16 w-16 items-center justify-center rounded-lg bg-primary-600 text-white">
                <svg
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <div className="m-4 mr-10">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  Secure by Design
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  Built with security at its core. All consumer data is
                  protected with enterprise-grade encryption and contemporary
                  compliance principles.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl border inline-flex items-center border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex ml-10 my-4 p-4 h-16 w-16 items-center justify-center rounded-lg bg-primary-600 text-white">
                <svg
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div className="m-4 mr-10">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  Prevent Undeliverable Mail
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  Make sure your marketing and billing go where the customer
                  will see it. We sync mailing data so we can keep your records
                  in top shape.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="rounded-2xl border inline-flex items-center border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex ml-10 my-4 p-4 h-16 w-16 items-center justify-center rounded-lg bg-primary-600 text-white">
                <svg
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
              </div>
              <div className="m-4 mr-10">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  Scalable Growth
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  Grow without limits. Our platform scales seamlessly with you,
                  from startup to enterprise. We have service levels for all
                  sizes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Join with UpDate to transform your operations.
            </p>
            <div className="mt-10">
              <a
                href="/investor-relations"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-900 shadow-sm transition-colors hover:bg-primary-50"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
