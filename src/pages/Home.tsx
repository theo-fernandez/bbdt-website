import heroImage from "../media/hero-image.png";
import { FiChevronDown } from "react-icons/fi";
import {
  FaInstagram,
  FaFacebookSquare,
  FaYoutube,
  FaGoogleDrive,
} from "react-icons/fa";
// import heroImageMobile from "../media/hero-image-mobile.png"
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import Calendar from "../components/Calendar";

export default function Home() {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center">
        <div
          className="flex h-5/6 w-full flex-col items-center justify-end bg-cover"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="font-sans text-7xl font-medium text-white">
            Brown Ballroom Dance Team
          </div>
          <div className="h-1/3"></div>
        </div>
        <FiChevronDown className="m-1 text-7xl" />
      </div>

      <div className="my-20 flex w-screen items-center justify-center">
        <div className="flex w-3/4 flex-col items-center rounded-lg bg-white py-16 shadow-lg">
          <div className="my-4 font-sans text-4xl text-gray-900">
            Welcome to Brown Ballroom Dance!
          </div>
          <div className="m-12 w-3/4 font-sans text-lg leading-loose text-gray-700">
            Brown Ballroom is a group of Brown students, RISD students, and
            members from the nearby community who love to dance. We have weekly
            lessons in waltz, tango, chacha, rumba, east-coast-swing, jive,
            foxtrot and more. Anyone is welcome to join the team, regardless of
            skill level. In addition to our weekly practices, we also host a
            tournament, social dances, and showcases throughout the academic
            year. To learn more about about the Brown Ballroom Team, click the
            get involved button. If you have questions or concerns, please reach
            out to ballroom e-board.
          </div>
          <div className="flex w-1/2 flex-row justify-around">
            <PrimaryButton text="Get Involved" link="classes" />
            <SecondaryButton text="Contact BBDT" link="contact" />
          </div>
        </div>
      </div>
      <div className="my-20 flex w-screen items-center justify-center">
        <div className="flex w-3/4 flex-col items-center rounded-lg bg-white py-12 shadow-lg">
          <div className="my-2 font-sans text-4xl text-gray-900">
            Upcoming Classes and Events
          </div>
          <Calendar />
        </div>
      </div>
      <div className="my-20 flex w-screen items-center justify-center">
        <div className="flex w-3/4 flex-col items-center rounded-lg bg-white py-16 shadow-lg">
          <div className="my-4 font-sans text-4xl text-gray-900">
            Competition and Social Dances
          </div>
          <div className="m-12 w-3/4 font-sans text-lg leading-loose text-gray-600">
            Brown hosts a yearly competition at the end of October where dancers
            from nearby colleges and dance studios come to compete. Dancers of
            all skill levels are welcome, from newcomer to open. There are four
            styles of dance at the competition: rhythm, standard, smooth, and
            latin. There is also an additional section for syllabus. Brown also
            hosts showcases and social dances throughout the year. Whether you
            are considering joining ballroom and want to try it out, or you are
            experienced and want to meet new people, social dances are a lot of
            fun.
          </div>
          <div className="flex w-1/2 flex-row justify-around">
            <PrimaryButton text="Learn More" link="events" />
          </div>
        </div>
      </div>
      <div className="my-20 flex w-screen items-center justify-center">
        <div className="flex w-3/4 flex-col items-center rounded-lg bg-white py-16 shadow-lg">
          <div className="my-4 font-sans text-4xl text-gray-900">
            Socials and Additional Resources
          </div>
          <div className="mt-12 flex w-3/4 flex-row items-center justify-evenly">
            <a
              href="https://www.instagram.com/brownballroom/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="text-6xl text-gray-600 transition hover:text-red-600 active:text-red-800" />
            </a>
            <a
              href="https://www.facebook.com/brownballroom/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare className="text-6xl text-gray-600 transition hover:text-red-600 active:text-red-800" />
            </a>
            <a
              href="https://www.youtube.com/user/brownballroom"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube className="text-6xl text-gray-600 transition hover:text-red-600 active:text-red-800" />
            </a>
            <a
              href="https://drive.google.com/drive/u/2/folders/11kDEZ4D-chfej4njfBcMakHjROccKIwk"
              target="_blank"
              rel="noreferrer"
            >
              <FaGoogleDrive className="text-6xl text-gray-600 transition hover:text-red-600 active:text-red-800" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
