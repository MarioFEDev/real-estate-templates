
        const vpName = document.querySelector('.vp-name')
        const vpImg = document.querySelector('.vp-intro-img')
        const vpCity = document.querySelector('.vp-city')
        const vpState = document.querySelector('.vp-state')
        const vpBed = document.querySelector('.vp-bed')
        const vpBath = document.querySelector('.vp-bath')
        const vpSize = document.querySelector('.vp-size')
        const vpPrice = document.querySelector('.vp-price')
        const viewportCon = document.querySelector('.viewport-con');
        const vpVideo = document.querySelector('.video-con video');
        const vpAddDet = document.querySelector('.vp-add-det');
        const vpLiving = document.querySelector('.vp-living img');
        const vpBedroom = document.querySelector('.vp-bedroom img');
        const vpKitchen = document.querySelector('.vp-kitchen img');
        const vpDining = document.querySelector('.vp-dining img');

        const citySelect = document.getElementById('cities');
        const locFilInput = document.getElementById('loc-fil');

        const priceMinInput = document.getElementById('price-min');
        const priceMaxInput = document.getElementById('price-max');
        const sizeMinInput = document.getElementById('size-min');
        const sizeMaxInput = document.getElementById('size-max');
        const bedMinInput = document.getElementById('bed-min');
        const bedMaxInput = document.getElementById('bed-max');
        const bathMinInput = document.getElementById('bath-min');
        const bathMaxInput = document.getElementById('bath-max');

        citySelect.addEventListener('change', () => {
            locFilInput.value = citySelect.options[citySelect.selectedIndex].value;
            console.log(locFilInput.value)
        });

        function viewProperty(button) {
            const listing = button.closest('.listing');
            const name = listing.querySelector('.list-name').textContent;
            const imgSrc = listing.querySelector('.list-img img').src;
            const city = listing.querySelector('.city').textContent;
            const state = listing.querySelector('.state').textContent;
            const bed = listing.querySelector('.bed').textContent;
            const bath = listing.querySelector('.bath').textContent;
            const size = listing.querySelector('.size').textContent;
            const price = listing.querySelector('.price').textContent;
            const videoSrc = listing.querySelector('.virtual-tour video').src;
            const addDet = listing.querySelector('.add-det').innerHTML;
            const livingImg = listing.querySelector('.liv-img img').src;
            const bedroomImg = listing.querySelector('.bed-img img').src;
            const kitchenImg = listing.querySelector('.kit-img img').src;
            const diningImg = listing.querySelector('.din-img img').src;

            vpName.textContent = name;
            vpImg.style.backgroundImage = `url(${imgSrc})`;
            vpCity.textContent = city;
            vpState.textContent = state;
            vpBed.textContent = bed;
            vpBath.textContent = bath;
            vpSize.textContent = size;
            vpPrice.textContent = price;
            vpVideo.src = videoSrc;
            vpAddDet.innerHTML = addDet;
            vpLiving.src = livingImg;
            vpBedroom.src = bedroomImg;
            vpKitchen.src = kitchenImg;
            vpDining.src = diningImg;

            viewportCon.classList.remove('none');
        }

        function removeViewport(){
            viewportCon.classList.add('none')
        }

        function deComma(value) {
            let cleanedValue = value.replace(/,/g, '');
            return cleanedValue;
        }
        
        function addComma(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
     
        document.querySelectorAll('.view-prop').forEach(button => {
            button.addEventListener('click', () => viewProperty(button));
        });
    
        priceMinInput.addEventListener('change', priceFilter)
        priceMaxInput.addEventListener('change', priceFilter)

        sizeMinInput.addEventListener('change', sizeFilter)
        sizeMaxInput.addEventListener('change', sizeFilter)

        bedMinInput.addEventListener('change', bedFilter)
        bedMaxInput.addEventListener('change', bedFilter)
        
        bathMinInput.addEventListener('change', bathFilter)
        bathMaxInput.addEventListener('change', bathFilter)

 

        function priceFilter(){

        }

        function sizeFilter(){

        }

        function bedFilter(){

        }

        function bathFilter(){

        }
