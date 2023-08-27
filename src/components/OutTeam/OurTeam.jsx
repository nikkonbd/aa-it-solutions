import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const OurTeam = () => {
  return (
    <div className="pb-20">
      <div className="my-8">
        <div>
          <h2 className="text-center text-1xl text-[#0dcaf0]">Team Member</h2>
          <h1 className="text-4xl font-semibold text-center mt-3">
            Our Team Members
          </h1>
        </div>
      </div>
      <div className="grid md:max-w-6xl mx-auto md:grid-cols-4 lg:grid-cols-4 gap-6 px-12">
      <figure className="snip1205 shadow-md">
        <Card
          className="w-full md:w-70 py-4"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/sQ2f2KZ/11.png)",
          }}
        >
          <CardHeader
            floated={false}
            className="rounded-full h-44 w-44 mx-auto border-2 "
          >
            <img
              className="rounded-full "
              src="https://i.ibb.co/XZbpw2t/314762540-5611553278890225-4380270442324469988-n.jpg"
              alt="profile-picture"
            />
            <i className="flex justify-center items-center gap-2">
                <FaFacebook className="text-white "></FaFacebook>
                <FaTwitter className="text-white"></FaTwitter>
                <FaWhatsapp className="text-white"></FaWhatsapp>
              </i>
              <a href="#"></a>
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h5" color="blue-gray" className="mb-2 text-[#03112d]">
            Dhimanendu Sarkar
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              CEO / Founder
            </Typography>
          </CardBody>
        </Card>
        </figure>
        <figure className="snip1205 shadow-md">
        <Card
          className="w-full md:w-70 py-4"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/sQ2f2KZ/11.png)",
          }}
        >
          <CardHeader
            floated={false}
            className="rounded-full h-44 w-44 mx-auto border-2"
          >
            <img
              className="rounded-full "
              src="https://i.ibb.co/mH6WK81/315011787-109514011978865-8680914937792837834-n.jpg"
              alt="profile-picture"
            />
            <i className="flex justify-center items-center gap-2">
                <FaFacebook className="text-white "></FaFacebook>
                <FaTwitter className="text-white"></FaTwitter>
                <FaWhatsapp className="text-white"></FaWhatsapp>
              </i>
              <a href="#"></a>
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h5" color="blue-gray" className="mb-2 text-[#03112d]">
              Dhritiman Sarker
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              Graphics Designer
            </Typography>
          </CardBody>
        </Card>
        </figure>
        <figure className="snip1205 shadow-md">
          <Card
            className="w-full md:w-70 py-4"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/sQ2f2KZ/11.png)",
            }}
          >
            <CardHeader
              floated={false}
              className="rounded-full mx-auto w-44 h-44 border-2"
            >
              <img
                className="rounded-full "
                src="https://i.ibb.co/1RD3Mp4/366366996-672489964924187-9036947057557635576-n.jpg"
                alt="profile-picture"
              />
             
              <i className="flex justify-center items-center gap-2">
                <FaFacebook className="text-white "></FaFacebook>
                <FaTwitter className="text-white"></FaTwitter>
                <FaWhatsapp className="text-white"></FaWhatsapp>
              </i>
              <a href="#"></a>
              
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" color="blue-gray" className="mb-2 text-[#03112d]">
                Nikkon Mondal
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                Front-End Developer
              </Typography>
            </CardBody>
          </Card>
        </figure>
        <figure className="snip1205 shadow-md">
          <Card
            className="w-full md:w-70 py-4"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/sQ2f2KZ/11.png)",
            }}
          >
            <CardHeader
              floated={false}
              className="rounded-full mx-auto w-44 h-44 border-2"
            >
              <img
                className=""
                src="	https://i.ibb.co/GWbgG2j/313107258-853220252531686-7773343761535383467-n.jpg"
                alt="profile-picture"
              />
              <i className="flex justify-center items-center gap-2">
                <FaFacebook className="text-white "></FaFacebook>
                <FaTwitter className="text-white"></FaTwitter>
                <FaWhatsapp className="text-white"></FaWhatsapp>
              </i>
              <a href="#"></a>
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" color="blue-gray" className="text-[#03112d] mb-2">
              Shuvo Jit Kumar
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                Web Developer
              </Typography>
            </CardBody>
          </Card>
        </figure>
      </div>
    </div>
  );
};

export default OurTeam;
