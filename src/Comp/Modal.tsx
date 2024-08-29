import React from 'react';
import { IoReturnDownBack } from "react-icons/io5";

interface ModalProps {
    video: any;
    onClose: () => void;
}



const Modal: React.FC<ModalProps> = ({ video, onClose }) => {
    if (!video) return null;

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
            <div className='bg-white p-4 rounded-lg max-w-[100%] max-h-[100%] overflow-auto relative'>
                <div className='flex items-center justify-start gap-6 pb-4'>
                    <IoReturnDownBack onClick={onClose} className=' w-[30px] h-[30px] cursor-pointer' />
                    <h1 className='font-semibold capitalize'>{video.snippet.channelTitle}  -  {video.snippet.title}</h1>
                </div>

                <iframe
                    width="1200"
                    height="600"
                    src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=10`}
                    title={video.snippet.title}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
                <div className='flex justify-start  gap-3 mt-4'>
                    <img
                        className='w-[40px] h-[40px] border rounded-[50%]'
                        src={video.snippet.thumbnails.default.url}
                        alt={video.snippet.channelTitle}
                    />
                    <p className='mt-2 capitalize'>{video.snippet.channelTitle}</p>
                </div>
                <div className='mt-4'>
                    <h1>Description</h1>
                    <p className='mt-2 break-words  text-gray-600'>{video.snippet.description}</p>
                </div>

            </div>
            
        </div>
    );
};

export default Modal;
