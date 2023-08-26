import { Button } from '@material-tailwind/react';
import React from 'react';
// import image1 from "../assets/Digital-Marketing.jpg"
import {HiCheck} from "react-icons/hi"

const AddCard = () => {
    return (
        <div className=''>
            <div className='py-24'>
                <p  className='text-center text-[#73d8ba]'>OUR SERVICE</p>
                <h2 className='text-5xl text-center font-bold'>Services to help your <br /> business drive success</h2>
            </div>
            <div className='md:grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:max-w-6xl lg:max-w-7xl mx-auto'>
                <div className="card mb-6 md:mb-0 w-full bg-base-100">
                    <figure className="px-4 pt-3">
                        <img src="https://www.mytectra.com/hubfs/website/images/courses/it/category/600+360%20IT%20Courses%20(37).png" alt="Shoes" className="rounded-xl h-[200px]" />
                    </figure>
                    <div className="card-body items-center">
                        <h2 className="card-title">Digital Marketing</h2>
                        <div className='text-left py-3'>
                            <p className='flex items-center gap-2'><HiCheck className='text-2xl' /> Social Media Marketing (SMM)</p>
                            <p className='flex items-center gap-2'><HiCheck className='text-2xl' />Search Engine Optimization (SEO)</p>
                            <p className='flex items-center gap-2'><HiCheck className='text-2xl' />Traffic & Advertising</p>
                            <p className='flex items-center gap-2'><HiCheck className='text-2xl' />Strategy & Engagement</p>
                            <p className='flex items-center gap-2'><HiCheck className='text-2xl' />Planning and Publishing</p>
                            <p className='flex items-center gap-2'><HiCheck className='text-2xl' />Analytics and Reporting</p>
                        </div>
                        <div className="card-actions">
                            <Button variant="outlined">Select Course</Button>
                        </div>
                    </div>
                </div>
                <div className="card mb-6 md:mb-0 w-full bg-base-100">
                    <figure className="px-4 pt-3">
                        <img src="https://res.cloudinary.com/hamstech/images/v1637134439/Hamstech%20App/Title-Image-4_80465274aebb5/Title-Image-4_80465274aebb5.jpg?_i=AA" alt="Shoes" className="rounded-xl h-[200px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Graphics Design</h2>
                        <div className='text-left py-3'>
                            <p className='flex items-center gap-2'><HiCheck className='text-2xl' /> Adobe Photoshop</p>
                            <p className='flex items-center gap-2'><HiCheck className='text-2xl' />Adobe Illustrator</p>
                            <p className='flex items-center gap-2'><HiCheck className='text-2xl' />Social Media Banner</p>
                            <p className='flex items-center gap-2'><HiCheck className='text-2xl' />Business Card Design</p>
                            <p className='flex items-center gap-2'><HiCheck className='text-2xl' />Banner & Flyer Design</p>
                            <p className='flex items-center gap-2'><HiCheck className='text-2xl' />All Kinds Of Banner</p>
                        </div>
                        <div className="card-actions">
                            <Button variant="outlined">Select Course</Button>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100">
                    <figure className="px-4 pt-3">
                        <img src="https://sugermint.com/wp-content/uploads/2022/02/Importance-of-Web-Design-and-Development.jpg" alt="Shoes" className="rounded-xl h-[200px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Web-Design & Development</h2>
                        <div className='text-left py-3'>
                            <p className='flex items-center gap-2'><HiCheck className='text-2xl' /> HTML (Hyper Text Markup Language)</p>
                            <p className='flex items-center gap-2'><HiCheck className='text-2xl' />CSS (Cascading Style Sheets)</p>
                            <p className='flex items-center gap-2'><HiCheck className='text-2xl' />Tailwind & Bootstrap css Framework</p>
                            <p className='flex items-center gap-2'><HiCheck className='text-2xl' />Figma to Html</p>
                            <p className='flex items-center gap-2'><HiCheck className='text-2xl' />Github</p>
                            <p className='flex items-center gap-2'><HiCheck className='text-2xl' />Javascript (React Framework) </p>
                        </div>
                        <div className="card-actions">
                            <Button variant="outlined">Select Course</Button>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCard;