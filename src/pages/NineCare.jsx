import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaBookOpen,
  FaCalendarCheck,
  FaComments,
  FaExternalLinkAlt,
  FaHeartbeat,
  FaPlay,
  FaShieldAlt,
  FaUserMd,
} from "react-icons/fa";

const videos = [
  {
    title: "9Care AI is the AI Solution That Pregnant Women Desperately Need",
    description:
      "An introduction to 9Care AI and the support it offers expectant mothers.",
    url: "https://www.youtube.com/results?search_query=9Care+AI+is+the+AI+Solution+That+Pregnant+Women+Desperately+Need",
  },
  {
    title: "9Care AI Tutorial and Features",
    description:
      "A walkthrough of the app, pregnancy progress, appointments, learning, symptoms, and records.",
    videoId: "VAi98RVN__8",
  },
  {
    title: "How To Access The 9CareAI Chatbot Interface",
    description:
      "See how to open the AI bot and start a conversation about pregnancy, symptoms, or health.",
    videoId: "rBrUimmk-BA",
  },
  {
    title: "How To Access Healthcare Professionals Right On The 9Care App",
    description:
      "See how patients can ask a question in the learning platform and get a response from a doctor.",
    videoId: "b7z5kJzrB2o",
  },
];

const clientVideos = [
  {
    title: "9Care AI - Client video 1",
    src: "/videos/9care-ai-client-video-1.mp4",
  },
  {
    title: "9Care AI - Client video 2",
    src: "/videos/9care-ai-client-video-2.mp4",
  },
  {
    title: "9Care AI - Client video 3",
    src: "/videos/9care-ai-client-video-3.mp4",
  },
];

const features = [
  {
    icon: FaHeartbeat,
    title: "1. Report symptoms",
    description:
      "Log symptoms that raise concern so your healthcare team can be notified and follow up. The client describes being able to contact a provider or make an emergency call from the app.",
  },
  {
    icon: FaBookOpen,
    title: "2. Learn",
    description:
      "Access pregnancy materials vetted and recorded by healthcare professionals. If something is unclear, leave a question in the interactive learning space for a healthcare provider to answer.",
  },
  {
    icon: FaCalendarCheck,
    title: "3. Book appointments",
    description:
      "Choose an available date and time for an appointment, then manage or reschedule later visits. The client says doctors are alerted when an appointment is booked or changed.",
  },
  {
    icon: FaShieldAlt,
    title: "4. Profile and records",
    description:
      "Manage personal and spouse details, complete the health assessment, update account information, verify an email address, and add a WhatsApp number for pregnancy updates.",
  },
];

const NineCare = () => (
  <main className="min-h-screen bg-primary text-white">
    <section className="bg-primary">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-8 sm:px-10 lg:px-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-poppins text-sm text-dimWhite transition-colors hover:text-secondary"
        >
          <FaArrowLeft aria-hidden="true" />
          Back to AI Women Rising
        </Link>

        <div className="mx-auto mt-10 max-w-3xl text-center sm:mt-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/5 px-4 py-2 font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
            <FaHeartbeat aria-hidden="true" />
            A maternal health initiative by AI Rising
          </span>
          <h1 className="mt-6 font-poppins text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Meet 9Care AI
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-poppins text-base leading-7 text-dimWhite sm:text-lg sm:leading-8">
            Pregnancy information, symptom reporting, appointments, and
            connections with healthcare professionals—together in one app.
            Explore the videos and details shared by the client.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-16 lg:py-16">
        <div className="mb-8">
          <p className="font-poppins text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
            Videos
          </p>
          <h2 className="mt-3 font-poppins text-3xl font-semibold text-white sm:text-4xl">
            Watch 9Care AI videos
          </h2>
          <p className="mt-4 max-w-2xl font-poppins leading-7 text-dimWhite">
            Play the videos shared by the client here, or open the YouTube
            walkthroughs directly on YouTube.
          </p>
        </div>

        <h3 className="mb-5 font-poppins text-xl font-semibold text-white">
          YouTube walkthroughs
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((video) => (
            <article
              key={video.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-primary"
            >
              {video.videoId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
                  title={video.title}
                  className="aspect-[9/16] w-full bg-black"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex aspect-[9/16] flex-col items-center justify-center gap-5 bg-[#0b1425] px-6 text-center transition-colors hover:bg-[#111f35]"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-xl text-primary">
                    <FaPlay aria-hidden="true" className="ml-1" />
                  </span>
                  <span className="font-poppins text-sm font-semibold text-white">
                    Watch on YouTube
                  </span>
                </a>
              )}
              <div className="p-5">
                <h3 className="font-poppins text-base font-semibold leading-6 text-white">
                  {video.title}
                </h3>
                <p className="mt-2 font-poppins text-sm leading-6 text-dimWhite">
                  {video.description}
                </p>
                <a
                  href={
                    video.videoId
                      ? `https://www.youtube.com/shorts/${video.videoId}`
                      : video.url
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-poppins text-sm font-semibold text-secondary hover:text-white"
                >
                  Open video
                  <FaExternalLinkAlt
                    aria-hidden="true"
                    className="text-[10px]"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 max-w-3xl font-poppins text-xs leading-5 text-dimWhite/70">
          The first YouTube address in the shared screenshot does not open as a
          valid video, so its card searches YouTube by the title shown in the
          message.
        </p>

        <h3 className="mb-5 mt-12 font-poppins text-xl font-semibold text-white">
          Videos shared with this project
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clientVideos.map((video) => (
            <article
              key={video.src}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              <video
                className="aspect-video w-full bg-black object-contain"
                src={video.src}
                controls
                playsInline
                preload="metadata"
                aria-label={video.title}
              >
                Your browser does not support the video tag.
              </video>
              <h4 className="p-5 font-poppins text-base font-semibold text-white">
                {video.title}
              </h4>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
        <div className="max-w-3xl">
          <p className="font-poppins text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
            What patients can do
          </p>
          <h2 className="mt-3 font-poppins text-3xl font-semibold text-white sm:text-4xl">
            Care tools described in the client's messages
          </h2>
          <p className="mt-4 font-poppins leading-7 text-dimWhite">
            The shared app tour highlights four areas for managing pregnancy
            care and staying in touch with healthcare professionals.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-xl text-secondary">
                <Icon aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-poppins text-xl font-semibold text-white">
                {title}
              </h3>
              <p className="mt-3 font-poppins text-sm leading-7 text-dimWhite">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-primary">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:px-10 md:grid-cols-2 lg:px-16 lg:py-16">
        <article className="rounded-2xl border border-secondary/20 bg-primary p-6 sm:p-8">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-xl text-secondary">
            <FaComments aria-hidden="true" />
          </span>
          <h2 className="mt-5 font-poppins text-2xl font-semibold text-white">
            9Care AI chat assistant
          </h2>
          <p className="mt-3 font-poppins leading-7 text-dimWhite">
            The client explains that patients can tap the “AI bot” icon in the
            middle of the app’s bottom toolbar to start a conversation and ask
            general questions about pregnancy, symptoms, or health.
          </p>
          <p className="mt-4 border-l-2 border-secondary pl-4 font-poppins text-sm leading-6 text-white">
            The AI offers general information and does not replace a clinician.
          </p>
        </article>

        <article className="rounded-2xl border border-white/10 bg-primary p-6 sm:p-8">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-xl text-secondary">
            <FaUserMd aria-hidden="true" />
          </span>
          <h2 className="mt-5 font-poppins text-2xl font-semibold text-white">
            Learning with healthcare professionals
          </h2>
          <p className="mt-3 font-poppins leading-7 text-dimWhite">
            Patients can interact with healthcare providers in the learning
            platform. If a topic is unclear, they can leave a question as a
            comment and a doctor can respond.
          </p>
          <a
            href="https://www.9careai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 font-poppins text-sm font-semibold text-secondary hover:text-white"
          >
            Visit the 9Care AI website
            <FaExternalLinkAlt aria-hidden="true" className="text-[10px]" />
          </a>
        </article>
      </div>
    </section>

    <div className="bg-primary pb-12 text-center">
      <Link
        to="/"
        className="inline-flex items-center gap-2 font-poppins text-sm font-medium text-dimWhite transition-colors hover:text-secondary"
      >
        <FaArrowLeft aria-hidden="true" />
        Return to AI Women Rising
      </Link>
    </div>
  </main>
);

export default NineCare;
