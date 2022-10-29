import React from "react";
import {
  FaqQuestion,
  Footer,
  GetStarted,
  Navbar,
  StoryCard,
} from "../components";

const LandingPage = () => {
  return (
    <div>
      <Navbar location="LandingPage" />
      <div className="w-full h-screen relative">
        <img
          className="w-full h-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/83b58a62-6624-4188-8119-8bdf395dae3f/ID-en-20221017-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="w-full h-screen bg-black/60 absolute top-0 left-0 z-10">
          <div className="w-3/4 text-white text-center grid gap-4 mx-auto my-52">
            <h1 className="text-5xl font-semibold">
              Unlimited movies, TV shows, and more.
            </h1>
            <p className="text-2xl">Watch anywhere. Cancel anytime.</p>
            <p className="text-2xl lg:text-xl">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <GetStarted />
          </div>
        </div>
      </div>
      {/* Story Card */}
      <div>
        <StoryCard
          title="Enjoy on your TV."
          subtitle="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
          image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          align="left"
        />
        <StoryCard
          title="Download your shows to watch offline."
          subtitle="Save your favorites easily and always have something to watch."
          image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          align="right"
        />
        <StoryCard
          title="Watch everywhere."
          subtitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-id.png"
          align="left"
        />
        <StoryCard
          title="Create profiles for kids."
          subtitle="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
          image="https://occ-0-64-58.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
          align="right"
        />
      </div>
      {/* Faq Question */}
      <div className="text-white  border-y-4 border-y-[#222]">
        <div className="w-4/5 py-16 mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-8 lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <FaqQuestion
            title="What is Netflix?"
            subtitle1="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
            subtitle2="You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
          />
          <FaqQuestion
            title="How much does Netflix cost?"
            subtitle1="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from IDR54,000 to IDR186,000 a month. No extra costs, no contracts."
          />
          <FaqQuestion
            title="Where can I watch?"
            subtitle1="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
            subtitle2="You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
          />
          <FaqQuestion
            title="How do i cancel?"
            subtitle1="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
          />
          <FaqQuestion
            title="What can I watch on Netflix?"
            subtitle1="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
          />
          <FaqQuestion
            title="Is Netflix good for kids?"
            subtitle1="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
            subtitle2="Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
          />
          <div className="w-3/4 mx-auto my-12">
            <p className="text-center text-xl md:text-2xl mb-4">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <GetStarted />
          </div>
        </div>
      </div>
      {/* Faq Question End */}
      <div className="border-y-4 border-y-[#222]">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
