import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaBookOpen,
  FaCalendarCheck,
  FaComments,
  FaExternalLinkAlt,
  FaHeartbeat,
  FaShieldAlt,
  FaUserMd,
} from "react-icons/fa";

const videos = [
  {
    title: "9Care AI is the AI Solution That Pregnant Women Desperately Need",
    description:
      "An introduction to 9Care AI and the support it offers expectant mothers.",
    videoId: "-GbyfgnpG4U",
    youtubeUrl:
      "https://youtube.com/shorts/-GbyfgnpG4U?si=13ERSzbwPnE1H7Ui",
  },
  {
    title: "How to Use 9Care AI",
    description: "A walkthrough showing how to use the 9Care AI app.",
    videoId: "JMQsIEQFKj8",
    youtubeUrl: "https://youtube.com/shorts/JMQsIEQFKj8?si=YFIo8sThovoJEujd",
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

const features = [
  {
    icon: FaHeartbeat,
    title: "1. Report symptoms",
    description:
      "Log symptoms that raise concern so your healthcare team can be notified and follow up. Contact a provider or make an emergency call from the app when needed.",
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
      "Choose an available date and time for an appointment, then manage or reschedule later visits. Doctors are alerted when an appointment is booked or changed.",
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
          <h1 className="mt-6 font-poppins text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Meet 9Care AI
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-poppins text-base leading-7 text-dimWhite sm:text-lg sm:leading-8">
            Pregnancy information, symptom reporting, appointments, and
            connections with healthcare professionals—together in one app.
            Watch the videos to see how 9Care AI works.
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
            Play the featured videos here, or open each video directly on
            YouTube.
          </p>
        </div>

        <h3 className="mb-5 font-poppins text-xl font-semibold text-white">
          YouTube walkthroughs
        </h3>
        <div className="grid grid-cols-2 gap-7 lg:grid-cols-4">
          {videos.map((video) => (
            <motion.article
              key={video.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.35,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#101a2d] to-[#070b14] shadow-lg transition-colors hover:border-secondary/40 hover:shadow-secondary/10"
            >
              <div className="aspect-video w-full overflow-hidden bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
                  title={video.title}
                  className="h-full w-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="p-5 sm:p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                    9Care AI
                  </span>
                </div>
                <h3 className="font-poppins text-lg font-semibold leading-7 text-white sm:text-xl">
                  {video.title}
                </h3>
                <p className="mt-2 min-h-12 font-poppins text-sm leading-6 text-dimWhite">
                  {video.description}
                </p>
                <a
                  href={
                    video.youtubeUrl ||
                    `https://www.youtube.com/shorts/${video.videoId}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-secondary/10 px-4 py-2.5 font-poppins text-sm font-semibold text-secondary transition-colors hover:bg-secondary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                >
                  Watch on YouTube
                  <FaExternalLinkAlt
                    aria-hidden="true"
                    className="text-[10px]"
                  />
                </a>
              </div>
            </motion.article>
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
            Care tools for patients
          </h2>
          <p className="mt-4 font-poppins leading-7 text-dimWhite">
            9Care AI brings together four areas for managing pregnancy
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
            Tap the “AI bot” icon in the middle of the app’s bottom toolbar to
            start a conversation and ask general questions about pregnancy,
            symptoms, or health.
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
