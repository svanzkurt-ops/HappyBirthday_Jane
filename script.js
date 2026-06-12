// Note data with full messages
const noteData = [
    {
        title: "💭 First Thought",
        message: `I remember the first time we met. There was something special about you right from the start. 
        The way you carry yourself, the light in your eyes... I knew I wanted to get to know you better. 
        Every moment since then has been a blessing.`
    },
    {
        title: "🎂 Your Day",
        message: `Happy Birthday, Jane! 🎂🎈
        Today's mission is simple: eat cake, smile a lot, take lots of pictures, and enjoy every second. You officially have permission to be spoiled all day long. Have the best birthday ever!`
    },
    {
        title: "🏛️ Special Architect Jane",
        message: `Happy Birthday, Architect Jane! 🏛️✨
        May this year bring you exciting opportunities, successful projects, and achievements in your studies and career. Keep building your dreams—you are capable of amazing things!`
    },
    {
        title: "❤️ In My Heart",
        message: `You mean so much to me. You've become such an important part of my life, 
        and I'm grateful for every second we spend together. 
        You inspire me to be a better person, to dream bigger, and to love deeper. 
        My heart smiles when I think of you.`
    },
    {
        title: "🌟 Your Qualities",
        message: `Your kindness and beauty shine so bright. But what I admire most is your character—
        your compassion, your strength, your authenticity. You never compromise who you are to please others. 
        You're genuine, real, and absolutely wonderful. The world is better because you're in it.`
    },
    {
        title: "🎁 My Wish For You",
        message: `On your special day, I wish for all your dreams to come true. 
        May this year bring you endless joy, new adventures, and all the success you deserve. 
        I hope you take a moment to celebrate how amazing you truly are. 
        You deserve the entire world and so much more.`
    },
    {
        title: "💝 Happy Birthday",
        message: `Have the most amazing birthday ever! Celebrate YOU—your beauty, your strength, your uniqueness. 
        You are one of a kind, and the world is so lucky to have you. 
        Thank you for being YOU. Happy Birthday to the most wonderful person I know! 🎉🎂✨`
    }
];

// Start experience - transition from opening to notes screen
function startExperience() {
    const opening = document.getElementById('opening');
    const notesScreen = document.getElementById('notes-screen');
    
    opening.classList.add('hidden');
    notesScreen.classList.remove('hidden');
    
    // Stagger the animation of notes appearing
    const notes = document.querySelectorAll('.note');
    notes.forEach((note, index) => {
        note.style.opacity = '0';
        note.style.transform = 'scale(0)';
        
        setTimeout(() => {
            note.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
            note.style.opacity = '1';
            note.style.transform = 'scale(1)';
        }, index * 150);
    });
}

// Open note modal with full message
function openNote(element) {
    const modal = document.getElementById('noteModal');
    const modalText = document.getElementById('modalText');
    
    // Get the index of the clicked note
    const notes = document.querySelectorAll('.note');
    let noteIndex = 0;
    notes.forEach((note, index) => {
        if (note === element) {
            noteIndex = index;
        }
    });
    
    const note = noteData[noteIndex];
    
    // Populate modal with note content
    modalText.innerHTML = `
        <h2>${note.title}</h2>
        <p>${note.message}</p>
    `;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('noteModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('noteModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
