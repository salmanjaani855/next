import React from 'react'

export default function About() {
  return (
    <div>
      <div className="sm:flex items-center max-w-screen-xl">
  <div className="sm:w-1/2 p-10">
    <div className="image object-center text-center">
      <img src="https://i.imgur.com/WbQnbas.png" alt="About our company" />
    </div>
  </div>
  <div className="sm:w-1/2 p-5">
    <div className="text">
      <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
        About us
      </span>
      <h2 className="my-4 font-bold text-3xl sm:text-4xl">
        About <span className="text-indigo-600">Our Company</span>
      </h2>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
        commodi doloremque, fugiat illum magni minus nisi nulla numquam
        obcaecati placeat quia, repellat tempore voluptatum.
      </p>
    </div>
  </div>
</div>









      <div className="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24">
    <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">

                <div>
                    <div>
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                className="h-8 w-8 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z">
                                </path>
                            </svg>
                        </span>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-white">
                            Natural Language Processing (NLP):
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                            The AI product utilizes advanced NLP algorithms to understand and interpret human language,
                            enabling it to accurately process and analyze text-based inputs.
                        </p>
                        <div className="mt-6">
                            <a className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                                href="/login">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img loading="lazy" width="647" height="486"
                        className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                     src="https://images.unsplash.com/photo-1569144157591-c60f3f82f137"/>
                </div>
            </div>
        </div>
    </div>



    <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                <div>
                    <div>
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                className="h-8 w-8 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                                </path>
                            </svg>
                        </span>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-white">
                            Sentiment Analysis:
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                            The product has built-in sentiment analysis capabilities, allowing it to determine the
                            sentiment (positive, negative, or neutral) expressed in text or customer feedback.
                        </p>
                        <div className="mt-6">
                            <a className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                                href="/login">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img alt="Inbox user interface" loading="lazy" width="647" height="486"
                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                         src="https://images.unsplash.com/photo-1599134842279-fe807d23316e"/>
                </div>
            </div>
        </div>
    </div>



    <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                <div>
                    <div>
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                className="h-8 w-8 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                                </path>
                            </svg>
                        </span>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-white">
                            Natural Language Generation (NLG):
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                            The AI product can generate human-like written content, summaries, or reports based on
                            structured data or analysis results.
                        </p>
                        <div className="mt-6">
                            <a className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                                href="/login">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img loading="lazy" width="646" height="485"
                        className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    
                        src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e"/>
                </div>
            </div>
        </div>
    </div>
</div>











    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Visit Our Location</h2>
          <p className="mt-4 text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Map Section */}
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                width="100%"
                height="480"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Info Section */}
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                  <p className="mt-1 text-gray-600">123 Main St, San Francisco, CA 94105</p>
                </div>

                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                  <p className="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
                  <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                  <p className="mt-1 text-gray-600">Sunday: Closed</p>
                </div>

                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                  <p className="mt-1 text-gray-600">Email: info@example.com</p>
                  <p className="mt-1 text-gray-600">Phone: +1 23494 34993</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>








        <section id="our-team" className="bg-gray-100 py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
            <img
              src="https://spacema-dev.com/elevate/assets/images/team/1.jpg"
              alt="Team Member 1"
              className="w-full rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-700">Role: Software Engineer</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
            <img
              src="https://spacema-dev.com/elevate/assets/images/team/4.jpg"
              alt="Team Member 2"
              className="w-full rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-700">Role: Graphic Designer</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
            <img
              src="https://spacema-dev.com/elevate/assets/images/team/3.jpg"
              alt="Team Member 3"
              className="w-full rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Alex Johnson</h3>
            <p className="text-gray-700">Role: Marketing Manager</p>
          </div>

          {/* Team Member 4 */}
          <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
            <img
              src="https://spacema-dev.com/elevate/assets/images/team/2.jpg"
              alt="Team Member 4"
              className="w-full rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Peter Johnson</h3>
            <p className="text-gray-700">Role: Seo Specialist</p>
          </div>

          {/* Team Member 5 */}
          <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
            <img
              src="https://spacema-dev.com/elevate/assets/images/team/5.jpg"
              alt="Team Member 5"
              className="w-full rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Emily Brown</h3>
            <p className="text-gray-700">Role: UX Designer</p>
          </div>

          {/* Team Member 6 */}
          <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
            <img
              src="https://spacema-dev.com/elevate/assets/images/team/6.jpg"
              alt="Team Member 6"
              className="w-full rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Michael Davis</h3>
            <p className="text-gray-700">Role: Frontend Developer</p>
          </div>

          {/* Team Member 7 */}
          <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
            <img
              src="https://spacema-dev.com/elevate/assets/images/team/7.jpg"
              alt="Team Member 7"
              className="w-full rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
            <p className="text-gray-700">Role: Content Writer</p>
          </div>

          {/* Team Member 8 */}
          <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
            <img
              src="https://spacema-dev.com/elevate/assets/images/team/8.jpg"
              alt="Team Member 8"
              className="w-full rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">David Wilson</h3>
            <p className="text-gray-700">Role: Project Manager</p>
          </div>
        </div>
      </div>
    </section>




        <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            What Our Customers Are Saying
          </h2>
        </div>

        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {/* Testimonial 1 */}
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                  <svg
                    aria-hidden="true"
                    width="105"
                    height="78"
                    className="absolute left-6 top-6 fill-slate-100"
                  >
                    <path d="M25.086 77.292c..."></path>
                  </svg>
                  <blockquote className="relative">
                    <p className="text-lg tracking-tight text-slate-900">
                      I love the fitness apparel and gear I purchased from this
                      site. The quality is exceptional and the prices are
                      unbeatable.
                    </p>
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div className="font-display text-base text-slate-900">
                        Sheryl Berge
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <img
                        alt="Sheryl Berge"
                        className="h-14 w-14 object-cover"
                        src="https://randomuser.me/api/portraits/men/15.jpg"
                      />
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>

          {/* Testimonial 2 */}
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                  <svg
                    aria-hidden="true"
                    width="105"
                    height="78"
                    className="absolute left-6 top-6 fill-slate-100"
                  >
                    <path d="M25.086 77.292c..."></path>
                  </svg>
                  <blockquote className="relative">
                    <p className="text-lg tracking-tight text-slate-900">
                      As a professional athlete, I rely on high-performance gear
                      for my training. This site offers a great selection of
                      top-notch products.
                    </p>
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div className="font-display text-base text-slate-900">
                        Leland Kiehn
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <img
                        alt="Leland Kiehn"
                        className="h-14 w-14 object-cover"
                        src="https://randomuser.me/api/portraits/women/15.jpg"
                      />
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>

          {/* Testimonial 3 */}
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                  <svg
                    aria-hidden="true"
                    width="105"
                    height="78"
                    className="absolute left-6 top-6 fill-slate-100"
                  >
                    <path d="M25.086 77.292c..."></path>
                  </svg>
                  <blockquote className="relative">
                    <p className="text-lg tracking-tight text-slate-900">
                      The fitness apparel I bought here fits perfectly and feels
                      amazing. I highly recommend this store to anyone looking
                      for quality gear.
                    </p>
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div className="font-display text-base text-slate-900">
                        Peter Renolds
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <img
                        alt="Peter Renolds"
                        className="h-14 w-14 object-cover"
                        src="https://randomuser.me/api/portraits/men/10.jpg"
                      />
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>


   
    </div>
  )
}
