export function createSlider({
    wrapperId,
    containerId,
    cardClass = null,
    nextBtnId,
    prevBtnId,
    gap = 32,
    mode = "default",
    visibleCards = 1
}) {
    const wrapper = document.getElementById(wrapperId);
    const container = document.getElementById(containerId);
    const cards = cardClass ? container.querySelectorAll(`.${cardClass}`) : Array.from(container.children);
    const nextBtn = document.getElementById(nextBtnId);
    const prevBtn = document.getElementById(prevBtnId);

    let currentIndex = 0;
    let pageGroups = [];

    // Only used in "scroll" mode
    function getCardWidth() {
        return (cards[0] ? cards[0].offsetWidth : 0) + gap;
    }

    function getMaxIndex() {
        const totalCards = cards.length;
        return Math.max(totalCards - visibleCards, 0);
    }

    function updatePosition() {
        let offset = 0;

        if (mode === "group") {
            offset = pageGroups[currentIndex - 1] || 0;
        } else if (mode === "scroll") {
            offset = currentIndex * getCardWidth(); // includes gap
        } else {
            const slideWidth = cards[0] ? cards[0].offsetWidth : 0;
            offset = currentIndex * slideWidth; // no gap here
        }

        container.style.transform = `translateX(-${offset}px)`;
    }

    function setupGroups() {
        pageGroups = [];

        for (let i = 0; i < cards.length; i += 2) {
            const slide1 = cards[i];
            const slide2 = cards[i + 1];

            const width1 = slide1 ? slide1.offsetWidth : 0;
            const width2 = slide2 ? slide2.offsetWidth : 0;
            const groupWidth = width1 + width2 + (slide1 && slide2 ? gap : 0);

            const prevOffset = pageGroups.length > 0 ? pageGroups[pageGroups.length - 1] : 0;
            pageGroups.push(prevOffset + groupWidth);
        }
    }

    if (mode === "group") {
        setupGroups();
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            const maxIndex = mode === "group" ? pageGroups.length - 1 : getMaxIndex();
            currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
            updatePosition();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            const maxIndex = mode === "group" ? pageGroups.length - 1 : getMaxIndex();
            currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
            updatePosition();
        });
    }

    window.addEventListener("resize", () => {
        if (mode === "group") setupGroups();
        updatePosition();
    });

    updatePosition();
}
