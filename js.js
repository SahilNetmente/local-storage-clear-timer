</script>
		// clear auto cart items
		function localStorageTimer() {
			var hours = 24; // to clear the localStorage after 1 hour
			// (if someone want to clear after 8hrs simply change hours=8)
			var now = new Date().getTime();
			var setupTime = localStorage.getItem('setupTime');
			if (setupTime == null) {
				localStorage.setItem('setupTime', now)
			} else {
				if(now - setupTime > hours*60*60*1000) {
					localStorage.clear()
					localStorage.setItem('setupTime', now);
				}
			}
		}
    
    //update local storage clear cart timer
    function updateTimer() {
        var now = new Date().getTime();
        localStorage.setItem('setupTime', now)
    }
    
		localStorageTimer();
</script>
