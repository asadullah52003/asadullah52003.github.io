function toggleMenu() {
            const header = document.querySelector('header');
            header.classList.toggle('open');
        }

        var typed = new Typed('#element', {
            strings: ['💻 Web Developer', 'Video Editor', 'Associate Engineer'],
            typeSpeed: 40,
            showCursor: true,
            onComplete: function (self) {
                document.querySelectorAll(".typed-cursor").forEach(cursor => {
                    cursor.classList.add("hidden");
                });
            }
        });
        let typing = new Typed('.element', {
            strings: ['💻 Web Developer', '📽️Video Editor', '🛠️Associate Engineer'],
            typeSpeed: 30,
        });