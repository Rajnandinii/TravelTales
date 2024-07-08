import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about Blogs?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources 
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://newbreak.church/blog/?gad_source=1" target='_blank' rel='noopener noreferrer'>
                    Top Blog Website
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg" />
        </div>
    </div>
  )
}