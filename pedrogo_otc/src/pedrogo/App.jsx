import { useEffect } from 'react';

function App() {

	const countDownDate = new Date("September 30, 2024 10:32:00").getTime();

	function countdown(endDate) {
		const countdown = document.getElementById('countdown');
	
		const interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = endDate - now;
	
			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
			countdown.innerHTML = `0${days}:${hours}:${minutes}:${seconds}`;
	
			// Al termine del conto alla rovescia
			if (distance < 0) {
				clearInterval(interval);
				countdown.innerHTML = 'EXPIRED';
			}
		}, 1000);
	}

	useEffect(() => { 
		countdown(countDownDate);
	});

  	return (
		<>
			<nav className="navbar pedro-bg-dark fixed-top">
				<div className="container-lg">
					<a className="navbar-brand text-white" href="#">
						<img className="d-inline-block align-text-top w-30px" src="/assets/images/pedro.svg" alt="" /> PEDRO Go!
					</a>
				</div>
			</nav>
			<main className="pedrogo-main container-lg overflow-hidden">
				<div className="tab-content">
					<div className="tab-pane fade show active text-center" id="tab-tasks">
						<span className="pedrogo-section-title gap">Earn coins by completing simple tasks</span>
						<img className="pedrogo-section-image mt-5 mb-5" src="/assets/images/pedro_tasks.jpg" alt="" />
						<div className="row">
							<div className="col-12 col-md-6 mt-5">
								<span className="pedrogo-action-title">Daily Tasks</span>
								<div className="row p-4 p-md-3">
									<div className="col p-1 mt-3 mt-lg-0">
										<a className="pedro-btn pedro-border pedro-bg-teal d-block" href="">Like, Retweet, Comment on this post</a>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-6 mt-5">
								<span className="pedrogo-action-title">Welcome Quest</span>
								<div className="row p-4 p-md-3">
									<div className="col-12 col-lg-4 p-1 mt-3 mt-lg-0">
										<a className="pedro-btn pedro-border pedro-bg-teal d-block" href="">Join PEDRO Channel</a>
										<span className="pedrogo-plus-coins d-block mt-3">+500 <img src="/assets/images/coin.png" className="pedrogo-coins" alt="" /></span>
									</div>
									<div className="col-12 col-lg-4 p-1 mt-3 mt-lg-0">
										<a className="pedro-btn pedro-border pedro-bg-teal d-block" href="">Follow PEDRO on X</a>
										<span className="pedrogo-plus-coins d-block mt-3">+500 <img src="/assets/images/coin.png" className="pedrogo-coins" alt="" /></span>
									</div>
									<div className="col-12 col-lg-4 p-1 mt-3 mt-lg-0">
										<a className="pedro-btn pedro-border pedro-bg-teal d-block" href="">
											<span className="d-block d-lg-none">Connect wallet</span>
											<span className="d-none d-lg-inline-block">Connect<br/>wallet</span>
										</a>
										<span className="pedrogo-plus-coins d-block mt-3">+500 <img src="/assets/images/coin.png" className="pedrogo-coins" alt="" /></span>
									</div>
								</div>
							</div>
						</div>
						<div className="row mt-5">
							<div className="col p-5">
								<span className="pedrogo-action-title">Do you have a following?</span>
								<span className="pedrogo-action-subtitle">Apply to our Influencer hub and earn extra coins for posting content</span>
								<div className="row mt-5">
									<a className="col pedro-btn pedro-border pedro-bg-lightblue" href="">Apply!</a>
								</div>
							</div>
						</div>
					</div>
					<div className="tab-pane fade text-center" id="tab-booster">
						<span className="pedrogo-section-title gap">Boost your coins by buying more coins OR by playing our mobile game</span>
						<img className="pedrogo-section-image mt-5 mb-5" src="/assets/images/pedro_pedrogo.jpg" alt="" />
						<div className="row">
							<div className="col-12 col-md-6 mt-5">
								<span className="pedrogo-action-title">Booster</span>
								<span className="pedrogo-action-subtitle">Earn free coins<br />by playing!</span>
								<div className="row p-4 p-md-3">
									<div className="col p-1 mt-3">
										<a className="pedro-btn pedro-border pedro-bg-red d-block" href="">Start PEDRO GO!</a>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-6 mt-5">
								<span className="pedrogo-action-title">Accelerator</span>
								<span className="pedrogo-action-subtitle">Become a PEDRO Milionaire<br />by buying more coins</span>
								<div className="row p-4 p-md-3">
									<div className="col-12 p-1 mt-3">
										<a className="pedro-btn pedro-border pedro-bg-purple d-block" href="">BUY with PEDRO on Pulsechain (25% bonus)</a>
									</div>
									<div className="col-12 p-1 mt-3">
										<a className="pedro-btn pedro-border pedro-bg-purple d-block" href="">BUY with TON/TON USDT</a>
									</div>
									<div className="col-12 p-1 mt-3">
										<a className="pedro-btn pedro-border pedro-bg-purple d-block w-100" href="">BUY with card</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="tab-pane fade text-center" id="tab-buddies">
						<span className="pedrogo-section-title gap">Refer your friends and earn extra coins for each successful referral!</span>
						<img className="pedrogo-section-image mt-5 mb-5" src="/assets/images/pedro_buddies.jpg" alt="" />
						<div className="row p-4 p-md-3">
							<div className="col mt-5">
								<span className="pedrogo-action-title">3 Day Challenge Bonus</span>
								<span className="pedrogo-action-subtitle">Invite 7 friends in 3 days to earn 100K extra coins</span>
								<h1 id="countdown" className="mt-4 rainbow"></h1>
								<a className="pedro-btn pedro-border pedro-bg-red d-block w-100 mt-4" href="">Start Challenge</a>

								<span className="pedrogo-plus-coins d-block mt-3">+100,000 <img src="/assets/images/coin.png" className="pedrogo-coins" alt="" /></span>
							</div>
						</div>
						<div className="row p-4 p-md-3 mt-5">
							<div className="col">
								<span className="pedrogo-action-title">Buddies List</span>
								<span className="pedrogo-action-subtitle">Your friends are a treasure</span>
								<ul className="pedrogo-buddielist mt-4 p-0">
									<li>1. Andrea</li>
									<li>2. Andrea</li>
									<li>3. Andrea</li>
									<li>4. Andrea</li>
									<li>5. Andrea</li>
								</ul>
								<a className="pedro-btn pedro-border pedro-bg-red d-block w-100 mt-4" href="">Copy referral link</a>
								<span className="pedrogo-plus-coins d-block mt-3">+500 <img src="/assets/images/coin.png" className="pedrogo-coins" alt="" /> each successfull referral!</span>
							</div>
						</div>
					</div>
					<div className="tab-pane fade text-center" id="tab-leaderboard">
						<img className="pedrogo-section-image mb-5" src="/assets/ranks/01_poseidon.jpg" alt="" />
						<span className="pedrogo-action-title">Rank: Poseidon</span>
						<span className="pedrogo-action-subtitle mb-5 p-2">Your balance<br/>50,000,000 PEDRO Go!</span>
						<span className="pedrogo-action-title mt-5">Leaderboard</span>
						<ul className="pedrogo-buddielist mt-4 p-0">
							<li>1. Andrea</li>
							<li>2. Andrea</li>
							<li>3. Andrea</li>
							<li>4. Andrea</li>
							<li>5. Andrea</li>
						</ul>
					</div>
				</div>
			</main>
			<div className="pedro-bg-dark fixed-bottom pt-3 pb-3">
				<div className="d-flex justify-content-center">
					<ul className="nav nav-pills nav-fill">
						<li className="nav-item">
							<button className="nav-link active" data-bs-toggle="pill" data-bs-target="#tab-tasks" type="button">TASKS</button>
						</li>
						<li className="nav-item" >
							<button className="nav-link" data-bs-toggle="pill" data-bs-target="#tab-booster" type="button">BOOSTER</button>
						</li>
						<li className="nav-item" >
							<button className="nav-link" data-bs-toggle="pill" data-bs-target="#tab-buddies" type="button">BUDDIES</button>
						</li>
						<li className="nav-item">
							<button className="nav-link" data-bs-toggle="pill" data-bs-target="#tab-leaderboard" type="button">RANK</button>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default App;
