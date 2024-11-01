import React from 'react';

function ChatBox() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 ">
        <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
          {[
            { name: 'Neil Sims', message: 'Hey, how are you?', isOnline: true, imgSrc: 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg' },
            { name: 'Bonnie Green', message: 'Let’s catch up later.', isOnline: false, imgSrc: '/docs/images/people/profile-picture-3.jpg' },
            { name: 'Michael Gough', message: 'Are you coming to the event?', isOnline: true, imgSrc: '/docs/images/people/profile-picture-2.jpg' },
            { name: 'Thomas Lean', message: 'I will call you tomorrow.', isOnline: false, imgSrc: '/docs/images/people/profile-picture-5.jpg' },
            { name: 'Lana Byrd', message: 'Check your messages!', isOnline: true, imgSrc: '/docs/images/people/profile-picture-4.jpg' },
          ].map((person, index) => (
            <li key={index} className={`py-3 ${index === 0 ? 'pb-3 sm:pb-4' : 'sm:py-4'}`}>
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full" src={person.imgSrc} alt={`${person.name} image`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white text-left">
                    {person.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400 text-left">
                    {person.message}
                  </p>
                </div>
                <div className="flex items-center">
                  <span className={`h-3 w-3 rounded-full ${person.isOnline ? 'bg-blue-500' : 'bg-red-500'}`}></span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div>09</div>
      </div>
    </div>
  );
}

export default ChatBox;
