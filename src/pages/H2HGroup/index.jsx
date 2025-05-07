
// src/pages/H2HGroup/index.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// This would be imported from a database or API in a real application
import { groups } from '../../data/h2hGroups';

function H2HGroup() {
  const { groupId } = useParams();
  const { t, i18n } = useTranslation(['translation', 'h2h']);
  const currentLang = i18n.language;
  
  const [group, setGroup] = useState(null);
  const [activeTab, setActiveTab] = useState('about');
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [events, setEvents] = useState([]);
  const [members, setMembers] = useState([]);
  const [photos, setPhotos] = useState([]);
  
  // Fetch group data
  useEffect(() => {
    // In a real app, this would be an API call
    const foundGroup = groups.find(g => g.id === groupId);
    if (foundGroup) {
      setGroup(foundGroup);
      
      // Mock data for demonstration
      setPosts([
        {
          id: 1,
          author: 'Group Leader',
          content: currentLang === 'en' 
            ? 'Welcome to our group page! We\'re excited to have you join us.'
            : 'Välkommen till vår gruppsida! Vi är glada att du är med oss.',
          date: '2023-05-28',
          likes: 5,
          comments: []
        },
        {
          id: 2,
          author: 'Anna K.',
          content: currentLang === 'en'
            ? 'Last week\'s meeting was amazing! Looking forward to seeing everyone again.'
            : 'Förra veckans möte var fantastiskt! Ser fram emot att träffa alla igen.',
          date: '2023-05-25',
          likes: 3,
          comments: [
            {
              id: 1,
              author: 'Mark J.',
              content: currentLang === 'en' ? 'Totally agree!' : 'Håller helt med!',
              date: '2023-05-25'
            }
          ]
        }
      ]);
      
      setEvents([
        {
          id: 1,
          title: currentLang === 'en' ? 'Weekly Bible Study' : 'Veckovis Bibelstudium',
          date: '2023-06-07',
          time: currentLang === 'en' ? '7:00 PM' : '19:00',
          location: foundGroup.name,
          description: currentLang === 'en'
            ? 'Join us for our weekly Bible study session.'
            : 'Var med på vårt veckovisa bibelstudium.'
        },
        {
          id: 2,
          title: currentLang === 'en' ? 'Community Outreach' : 'Utåtriktad Verksamhet',
          date: '2023-06-10',
          time: currentLang === 'en' ? '10:00 AM' : '10:00',
          location: foundGroup.name,
          description: currentLang === 'en'
            ? 'We\'ll be serving our local community together.'
            : 'Vi kommer att tjäna vårt lokala samhälle tillsammans.'
        }
      ]);
      
      setMembers([
        { id: 1, name: foundGroup.leaderEn, role: currentLang === 'en' ? 'Leader' : 'Ledare', avatar: '/avatars/leader.jpg' },
        { id: 2, name: 'Anna Karlsson', role: currentLang === 'en' ? 'Member' : 'Medlem', avatar: '/avatars/member1.jpg' },
        { id: 3, name: 'Michael Berg', role: currentLang === 'en' ? 'Member' : 'Medlem', avatar: '/avatars/member2.jpg' },
        // More members would be added here
      ]);
      
      setPhotos([
        { id: 1, url: '/h2h-groups/photos/group1.jpg', caption: currentLang === 'en' ? 'Bible Study Session' : 'Bibelstudiesession' },
        { id: 2, url: '/h2h-groups/photos/group2.jpg', caption: currentLang === 'en' ? 'Fellowship Dinner' : 'Gemenskapsmiddag' },
        { id: 3, url: '/h2h-groups/photos/group3.jpg', caption: currentLang === 'en' ? 'Prayer Meeting' : 'Bönmöte' },
      ]);
    }
  }, [groupId, currentLang]);
  
if (!group) {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <div className="animate-spin h-12 w-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
      <p>{currentLang === 'en' ? 'Loading group information...' : 'Laddar gruppinformation...'}</p>
    </div>
  );
}

const handleTabChange = (tab) => {
  setActiveTab(tab);
};

const handlePostSubmit = (e) => {
  e.preventDefault();
  if (newPost.trim()) {
    const post = {
      id: posts.length + 1,
      author: currentLang === 'en' ? 'You' : 'Du',
      content: newPost,
      date: new Date().toISOString().split('T')[0],
      likes: 0,
      comments: []
    };
    setPosts([post, ...posts]);
    setNewPost('');
  }
};

return (
  <div className="bg-white">
    {/* Hero Section */}
    <div 
      className="bg-cover bg-center h-64 relative" 
      style={{ backgroundImage: `url(\${group.imageUrl || '/h2h-groups/default.jpg'})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">{group.name}</h1>
          <p className="mt-2 text-xl">{currentLang === 'en' ? group.focusEn : group.focusSv}</p>
        </div>
      </div>
    </div>
    
    <div className="container mx-auto px-4 py-8">
      {/* Navigation */}
      <div className="flex flex-wrap border-b mb-8">
        <button 
          className={`px-4 py-2 mr-2 font-medium \${activeTab === 'about' ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'}`}
          onClick={() => handleTabChange('about')}
        >
          {currentLang === 'en' ? 'About' : 'Om'}
        </button>
        <button 
          className={`px-4 py-2 mr-2 font-medium \${activeTab === 'posts' ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'}`}
          onClick={() => handleTabChange('posts')}
        >
          {currentLang === 'en' ? 'Posts' : 'Inlägg'}
        </button>
        <button 
          className={`px-4 py-2 mr-2 font-medium \${activeTab === 'events' ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'}`}
          onClick={() => handleTabChange('events')}
        >
          {currentLang === 'en' ? 'Events' : 'Evenemang'}
        </button>
        <button 
          className={`px-4 py-2 mr-2 font-medium \${activeTab === 'members' ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'}`}
          onClick={() => handleTabChange('members')}
        >
          {currentLang === 'en' ? 'Members' : 'Medlemmar'}
        </button>
        <button 
          className={`px-4 py-2 mr-2 font-medium \${activeTab === 'photos' ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'}`}
          onClick={() => handleTabChange('photos')}
        >
          {currentLang === 'en' ? 'Photos' : 'Foton'}
        </button>
      </div>
      
      {/* About Tab */}
      {activeTab === 'about' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">{currentLang === 'en' ? 'About Our Group' : 'Om Vår Grupp'}</h2>
              <p className="mb-4">
                {currentLang === 'en' 
                  ? `Welcome to ${group.name}! We are a community of believers focused on ${group.focusEn.toLowerCase()}. Our group meets weekly to study the Bible, pray together, and support each other in our faith journeys.`
                  : `Välkommen till ${group.name}! Vi är en gemenskap av troende med fokus på ${group.focusSv.toLowerCase()}. Vår grupp träffas varje vecka för att studera Bibeln, be tillsammans och stödja varandra i vår tro.`
                }
              </p>
              <p className="mb-4">
                {currentLang === 'en'
                  ? `We believe that small groups are the heart of the church, where real relationships are built and spiritual growth happens. Whether you're new to faith or have been following Jesus for years, you'll find a welcoming community here.`
                  : `Vi tror att smågrupper är kyrkans hjärta, där riktiga relationer byggs och andlig tillväxt sker. Oavsett om du är ny i tron eller har följt Jesus i många år, kommer du att hitta en välkomnande gemenskap här.`
                }
              </p>
              <p>
                {currentLang === 'en'
                  ? `Our meetings are relaxed and friendly. We typically start with some social time, move into Bible study or discussion, and end with prayer for each other's needs. All are welcome!`
                  : `Våra möten är avslappnade och vänliga. Vi börjar vanligtvis med lite social tid, fortsätter med bibelstudier eller diskussion, och avslutar med bön för varandras behov. Alla är välkomna!`
                }
              </p>
            </div>
            
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">{currentLang === 'en' ? 'Meeting Location' : 'Mötesplats'}</h2>
              <div className="h-80 rounded-lg overflow-hidden">
                <MapContainer 
                  center={group.coordinates} 
                  zoom={15}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={group.coordinates}>
                    <Popup>
                      <div>
                        <h3 className="font-bold">{group.name}</h3>
                        <p>{currentLang === 'en' ? group.meetingTimeEn : group.meetingTimeSv}</p>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-3">{currentLang === 'en' ? 'Group Details' : 'Gruppdetaljer'}</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium">{currentLang === 'en' ? 'Meeting Time:' : 'Mötestid:'}</span>
                  <p>{currentLang === 'en' ? group.meetingTimeEn : group.meetingTimeSv}</p>
                </div>
                <div>
                  <span className="font-medium">{currentLang === 'en' ? 'Focus:' : 'Fokus:'}</span>
                  <p>{currentLang === 'en' ? group.focusEn : group.focusSv}</p>
                </div>
                <div>
                  <span className="font-medium">{currentLang === 'en' ? 'Members:' : 'Medlemmar:'}</span>
                  <p>{group.memberCount}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">{currentLang === 'en' ? 'Group Leader' : 'Gruppledare'}</h3>
              <div className="flex items-center mb-3">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 mr-4">
                  <img src="/avatars/leader.jpg" alt="Leader" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-medium">{currentLang === 'en' ? group.leaderEn : group.leaderSv}</p>
                  <p className="text-sm text-gray-600">{currentLang === 'en' ? 'Group Leader' : 'Gruppledare'}</p>
                </div>
              </div>
              <div className="mt-3">
                <a href={`mailto:\${group.contactEmail}`} className="text-primary hover:underline">
                  {group.contactEmail}
                </a>
              </div>
            </div>
            
            <div className="bg-primary text-white p-6 rounded-lg mt-6">
              <h3 className="text-xl font-bold mb-3">{currentLang === 'en' ? 'Join This Group' : 'Gå Med I Denna Grupp'}</h3>
              <p className="mb-4">
                {currentLang === 'en' 
                  ? 'Interested in joining us? Contact the group leader or fill out the form on the main H2H page.'
                  : 'Intresserad av att gå med oss? Kontakta gruppledaren eller fyll i formuläret på H2H-huvudsidan.'
                }
              </p>
              <Link 
                to={`/\${currentLang}/h2h`}
                className="inline-block bg-white text-primary px-4 py-2 rounded hover:bg-opacity-90"
              >
                {currentLang === 'en' ? 'Back to All Groups' : 'Tillbaka till Alla Grupper'}
              </Link>
            </div>
          </div>
        </div>
      )}
      
      {/* Posts Tab */}
      {activeTab === 'posts' && (
        <div>
          <h2 className="text-2xl font-bold mb-6">{currentLang === 'en' ? 'Group Posts' : 'Gruppinlägg'}</h2>
          
          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">{currentLang === 'en' ? 'Share Something' : 'Dela Något'}</h3>
            <form onSubmit={handlePostSubmit}>
              <textarea 
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                rows="3"
                placeholder={currentLang === 'en' ? 'What\'s on your mind?' : 'Vad tänker du på?'}
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              ></textarea>
              <div className="mt-3 text-right">
                <button 
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90"
                >
                  {currentLang === 'en' ? 'Post' : 'Publicera'}
                </button>
              </div>
            </form>
          </div>
          
          <div className="space-y-6">
            {posts.map(post => (
              <div key={post.id} className="bg-white border rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                    <div>
                      <p className="font-medium">{post.author}</p>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                </div>
                <p className="mb-4">{post.content}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <button className="flex items-center mr-4 hover:text-primary">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    {post.likes} {currentLang === 'en' ? 'Likes' : 'Gillar'}
                  </button>
                  <button className="flex items-center hover:text-primary">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                    {post.comments.length} {currentLang === 'en' ? 'Comments' : 'Kommentarer'}
                  </button>
                </div>
                
                {post.comments.length > 0 && (
                  <div className="border-t pt-4 mt-4">
                    <h4 className="font-medium mb-3">{currentLang === 'en' ? 'Comments' : 'Kommentarer'}</h4>
                    <div className="space-y-4">
                      {post.comments.map(comment => (
                        <div key={comment.id} className="flex">
                          <div className="w-8 h-8 rounded-full bg-gray-300 mr-3 flex-shrink-0"></div>
                          <div>
                            <div className="bg-gray-100 p-3 rounded-lg">
                              <p className="font-medium text-sm">{comment.author}</p>
                              <p>{comment.content}</p>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">{comment.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="border-t pt-4 mt-4">
                  <div className="flex">
                    <div className="w-8 h-8 rounded-full bg-gray-300 mr-3 flex-shrink-0"></div>
                    <input 
                      type="text"
                      className="w-full p-2 bg-gray-100 rounded-full focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder={currentLang === 'en' ? 'Write a comment...' : 'Skriv en kommentar...'}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Events Tab */}
      {activeTab === 'events' && (
        <div>
          <h2 className="text-2xl font-bold mb-6">{currentLang === 'en' ? 'Upcoming Events' : 'Kommande Evenemang'}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map(event => (
              <div key={event.id} className="bg-white border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-primary text-white p-4">
                  <h3 className="font-bold text-xl">{event.title}</h3>
                  <p>{event.date} • {event.time}</p>
                </div>
                <div className="p-6">
                  <p className="mb-4">{event.description}</p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>{event.location}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <button className="text-primary hover:underline">
                      {currentLang === 'en' ? 'More Details' : 'Mer Detaljer'}
                    </button>
                    <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90">
                      {currentLang === 'en' ? 'RSVP' : 'Anmäl Dig'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">
              {currentLang === 'en' ? 'Suggest an Event' : 'Föreslå ett Evenemang'}
            </h3>
            <p className="mb-4">
              {currentLang === 'en' 
                ? 'Have an idea for a group activity? Submit your suggestion below!'
                : 'Har du en idé för en gruppaktivitet? Skicka in ditt förslag nedan!'
              }
            </p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  {currentLang === 'en' ? 'Event Title' : 'Evenemangtitel'}
                </label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  {currentLang === 'en' ? 'Suggested Date' : 'Föreslagen Datum'}
                </label>
                <input 
                  type="date" 
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  {currentLang === 'en' ? 'Description' : 'Beskrivning'}
                </label>
                <textarea 
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  rows="3"
                ></textarea>
              </div>
              
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90"
                >
                  {currentLang === 'en' ? 'Submit Suggestion' : 'Skicka Förslag'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Members Tab */}
      {activeTab === 'members' && (
        <div>
          <h2 className="text-2xl font-bold mb-6">{currentLang === 'en' ? 'Group Members' : 'Gruppmedlemmar'}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {members.map(member => (
              <div key={member.id} className="bg-white border rounded-lg overflow-hidden shadow-sm text-center p-6">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">
              {currentLang === 'en' ? 'Invite a Friend' : 'Bjud in en Vän'}
            </h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  {currentLang === 'en' ? 'Your Name' : 'Ditt Namn'}
                </label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  {currentLang === 'en' ? 'Friend\'s Name' : 'Vännens Namn'}
                </label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  {currentLang === 'en' ? 'Friend\'s Email' : 'Vännens E-post'}
                </label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  {currentLang === 'en' ? 'Friend\'s Phone (Optional)' : 'Vännens Telefon (Valfritt)'}
                </label>
                <input 
                  type="tel" 
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  {currentLang === 'en' ? 'Personal Message' : 'Personligt Meddelande'}
                </label>
                <textarea 
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  rows="3"
                  placeholder={currentLang === 'en' 
                    ? 'Add a personal invitation message...' 
                    : 'Lägg till ett personligt inbjudningsmeddelande...'
                  }
                ></textarea>
              </div>
              
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90"
                >
                  {currentLang === 'en' ? 'Send Invitation' : 'Skicka Inbjudan'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Photos Tab */}
      {activeTab === 'photos' && (
        <div>
          <h2 className="text-2xl font-bold mb-6">{currentLang === 'en' ? 'Group Photos' : 'Gruppfoton'}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {photos.map(photo => (
              <div key={photo.id} className="bg-white border rounded-lg overflow-hidden shadow-sm">
                <div className="h-48 overflow-hidden">
                  <img src={photo.url} alt={photo.caption} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <p className="font-medium">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">
              {currentLang === 'en' ? 'Share Photos' : 'Dela Foton'}
            </h3>
            <p className="mb-4">
              {currentLang === 'en' 
                ? 'Had a great time at a group event? Share your photos with the group!'
                : 'Hade du en trevlig tid på ett gruppevenemang? Dela dina foton med gruppen!'
              }
            </p>
            <form className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  {currentLang === 'en' ? 'Upload Photos' : 'Ladda upp Foton'}
                </label>
                <div className="border-2 border-dashed border-gray-300 p-6 rounded-md text-center">
                  <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <p className="mt-2">
                    {currentLang === 'en' 
                      ? 'Drag and drop photos here, or click to select files'
                      : 'Dra och släpp foton här, eller klicka för att välja filer'
                    }
                  </p>
                  <input type="file" className="hidden" multiple accept="image/*" />
                  <button
                    type="button"
                    className="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
                  >
                    {currentLang === 'en' ? 'Browse Files' : 'Bläddra bland Filer'}
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  {currentLang === 'en' ? 'Caption (Optional)' : 'Bildtext (Valfritt)'}
                </label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder={currentLang === 'en' ? 'Add a caption for your photos' : 'Lägg till en bildtext för dina foton'}
                />
              </div>

              <div>
                  <button
                    type="submit"
                    className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90"
                  >
                    {currentLang === 'en' ? 'Upload Photos' : 'Ladda upp Foton'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      
      {/* Footer section with group information */}
      <div className="bg-gray-100 py-8 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">{group.name}</h3>
              <p className="text-gray-600">
                {currentLang === 'en' ? 'Meeting Time: ' : 'Mötestid: '}
                {currentLang === 'en' ? group.meetingTimeEn : group.meetingTimeSv}
              </p>
            </div>
            
            <div className="flex space-x-4">
              <Link 
                to={`/\${currentLang}/h2h`} 
                className="text-primary hover:underline"
              >
                {currentLang === 'en' ? 'Back to All Groups' : 'Tillbaka till Alla Grupper'}
              </Link>
              <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90">
                {currentLang === 'en' ? 'Join This Group' : 'Gå Med I Denna Grupp'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default H2HGroup;

