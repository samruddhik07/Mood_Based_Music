// script.js

const moodSelect = document.getElementById('moodSelect');
const songsList = document.getElementById('songs');
const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');

// Dummy data for songs based on mood
const songsData = {
  happy: [
    { title: 'Flute 1', url: 'music/happy-song-1.mp3' },
    { title: 'Flute 2', url: 'music/happy-song-2.mp3' }
  ],
  sad: [
    { title: 'Flute 1', url: 'music/sad-song-1.mp3' },
    { title: 'Flute 2', url: 'music/sad-song-2.mp3' }
  ],
  relaxed: [
    { title: 'Relaxed Flute ', url: 'music/relaxed-song-1.mp3' },
  
  ],
  energetic: [
    { title: 'Energetic Flute', url: 'music/energetic-song-1.mp3' },
    { title: 'Energetic Flute ', url: 'music/energetic-song-2.mp3' }
  ]
};

// Function to update song list based on selected mood
function updateSongList(mood) {
  songsList.innerHTML = ''; // Clear current list
  const songs = songsData[mood];
  songs.forEach(song => {
    const li = document.createElement('li');
    li.textContent = song.title;
    li.onclick = () => playSong(song);
    songsList.appendChild(li);
  });
}

// Function to play the selected song
function playSong(song) {
  audioSource.src = song.url;
  audioPlayer.load(); // Reload the player with the new source
  audioPlayer.play(); // Play the selected song
}

// Event listener for mood change
moodSelect.addEventListener('change', () => {
  const selectedMood = moodSelect.value;
  updateSongList(selectedMood);
});

// Initial load with default mood (happy)
updateSongList('happy');
