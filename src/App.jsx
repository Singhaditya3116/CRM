
import './App.css'

function App() {
  return (
    <>
	  <main className="main">
		<div className="main-inner-wrap">
			<section className="section-1">
				<section className="left">
					
					<div className="card">
						<h2 className="card-heading">Contact Details</h2>
						<div className="card-body">

						</div>
					</div>
				</section>

				<section className="center">
					<div className="card">
						<h2 className="card-heading">Conversations</h2>
						<div className="card-body">
							<div className="email-wrapper">
								<h2 className="agent-suggestion">Agent Suggestion</h2>
								<div className="email-card">
									<div className="title">
										<div className="title-left-wrap">
											<div className="profile">
												<img src="https://cyber.comolho.com/static/img/avatar.png"/>
											</div>
											<div className="sender-details">
												<div className="from">Olivia John</div>
												<div className="from">To: Me</div>
											</div>
										</div>
										<div className="title-right-wrap">
											<div className="time">10:30 AM</div>
										</div>
									</div>

									<div className="email-body">
										<div className="message">
										Hey John,
										Your order has reached.
										</div>

										<a href="#" className="track-link">Track Your Order</a>

										<button className="cta">
											<span className="icon">
												&#x27A4;
											</span>
											<span className="text">
												Reply
											</span>
										</button>
									</div>
								</div>
							</div>

							

							<div className="whatsapp-wrapper">
								<div className="profile-wrapper">
									<img className="user-p" src="https://cyber.comolho.com/static/img/avatar.png" alt="User Profile"/>
									<img className="wa-p" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" alt="Whatsapp Icon"/>
								</div>
								<div className="whatsapp-body">
									<div className="name">Olivia</div>
									<div className="message">Hello John, how are you doing?</div>
									<div className="time">11:44 AM</div>
								</div>
							</div>
							
						</div>
					</div>
				</section>

				<section className="right">
					<div className="card">
						<h2 className="card-heading">Notes</h2>
						<div className="card-body">
							<ul className="notes-wrapper">
								<li className="note">
									Inspection Completed

									<div className="time">10:30 AM</div>
								</li>
								<li className="note">
									Inspection Completed
									<div className="time">10:30 AM</div>

								</li>
								<li className="note">
									Inspection Completed
									<div className="time">10:30 AM</div>

								</li>
							</ul>							
						</div>
					</div>
				</section>
			</section>
		</div>
		<footer>
			Footer
		</footer>
	  </main>
    </>
  )
}

export default App
