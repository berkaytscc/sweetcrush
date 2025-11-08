<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'SWEETCRUSH/UI',
	});
</script>

<Story name="Desktop">
	<div class="viewport desktop">
		<div class="layout-desktop">
		<!-- Board placeholder -->
		<div class="board" aria-label="Game board"></div>

		<!-- Bottom controls bar -->
		<div class="controls">
			<div class="inner">
				<div class="left">
			<div class="left-stack">
				<button class="icon icon-info" type="button" aria-label="Info">i</button>
				<div class="utilities left-utils">
					<button class="icon icon-gear" type="button" aria-label="Settings">⚙</button>
					<button class="icon icon-sound" type="button" aria-label="Sound">
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path d="M3 9v6h4l5 5V4L7 9H3z" />
									<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.06c1.48-.74 2.5-2.26 2.5-4.03z" />
									<path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
								</svg>
							</button>
						</div>
					</div>
					<div class="buybonus" aria-label="Buy Bonus placeholder">BUY BONUS</div>
					<div class="labels balance">
						<div class="label">BALANCE</div>
						<div class="value">TL 1.69</div>
					</div>
				</div>

		<div class="middle">
			<div class="labels win">
						<div class="label">WIN</div>
						<div class="value">$1.08</div>
					</div>
				</div>

				<div class="right">
					<div class="bet">
						<div class="label">BET</div>
						<div class="value">TL 20.00</div>
					</div>
					<div class="bet-controls">
						<button class="round small" aria-label="Increase bet">+</button>
						<button class="round small" aria-label="Decrease bet">−</button>
					</div>
			<button class="round spin" aria-label="Spin">
				<img src="/UI/spin-idle.webp" alt="" aria-hidden="true" />
				<span class="sr-only">Spin</span>
			</button>
					<button class="round auto" aria-label="Auto spins">A</button>
				</div>
		</div>

		<!-- close controls and layout-desktop before portrait markup -->
		</div>
		</div>

		<!-- Portrait layout (hidden by default, shown via media query) -->
		<div class="layout-portrait">
			<div class="top-actions">
				<button class="icon icon-info" type="button" aria-label="Info">i</button>
				<div class="utilities left-utils">
					<button class="icon icon-gear" type="button" aria-label="Settings">⚙</button>
					<button class="icon icon-sound" type="button" aria-label="Sound">
						<svg viewBox="0 0 24 24" aria-hidden="true">
							<path d="M3 9v6h4l5 5V4L7 9H3z" />
							<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.06c1.48-.74 2.5-2.26 2.5-4.03z" />
							<path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
						</svg>
					</button>
				</div>
			</div>
			<div class="controls portrait-controls">
				<div class="inner portrait-inner">
					<div class="portrait-grid">
						<div class="left-column">
							<button class="buybonus portrait" type="button" aria-label="Buy Bonus">BUY BONUS</button>
							<div class="labels balance">
								<div class="label">BALANCE</div>
								<div class="value">$1,000.00</div>
							</div>
						</div>
						<div class="center-column">
							<div class="center-buttons">
								<button class="round small" type="button" aria-label="Decrease bet">−</button>
								<button class="round spin" type="button" aria-label="Spin">
									<img src="/UI/spin-idle.webp" alt="" aria-hidden="true" />
									<span class="sr-only">Spin</span>
								</button>
								<button class="round small" type="button" aria-label="Increase bet">+</button>
							</div>
							<div class="bet">
								<div class="label">BET</div>
								<div class="value">$1.00</div>
							</div>
						</div>
						<div class="right-column">
							<button class="round auto" type="button" aria-label="Auto spins">A</button>
							<button class="round menu" type="button" aria-label="Menu">
								<span class="menu-icon" aria-hidden="true"></span>
								<span class="sr-only">Menu</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</Story>


<style>
	.viewport {
		position: relative;
		width: 100vw;
		height: 100vh;
		background: #ffffff url('/Background/DesktopBackground.png') center/cover no-repeat;
		overflow: hidden;
	}

	/* Show only one layout at a time */
	.layout-portrait { display: none; }
	.layout-desktop { display: block; }

	/* Base desktop styles */
	.controls {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 87%;
		background: linear-gradient(180deg, rgba(10, 10, 10, 0.827) 0%, rgba(10, 10, 10, 0.786) 45%, rgba(10,10,10,0.85) 100%);
		backdrop-filter: blur(1px);
		border-top: 1px solid rgba(255,255,255,0.12);
		box-shadow: 0 -12px 40px rgba(0,0,0,0.6);
		color: #fff;
	}

	.controls .inner {
		max-width: 1050px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		align-items: center;
		gap: 16px;
		transform: translateY(-25px);
	}

	.left {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.left-stack {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6px;
	}

	.buybonus {
		min-width: 90px;
		height: 36px;
		padding: 0 8px;
		border-radius: 6px;
		border: 1px dashed rgba(255,255,255,0.45);
		color: #ffd24d;
		font-weight: 900;
		font-size: 12px;
		letter-spacing: 0.01em;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: rgba(0,0,0,0.25);
		text-shadow: 0 1px 0 rgba(0,0,0,0.6);
	}

	.middle {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.right {
		display: grid;
		grid-auto-flow: column;
		align-items: center;
		justify-content: end;
		gap: 16px;
	}

	.labels .label,
	.bet .label {
		color: #f3c969;
		font-weight: 800;
		letter-spacing: 0.06em;
		margin-bottom: 4px;
		font-size: 12px;
		text-transform: uppercase;
		text-shadow: 0 1px 0 rgba(0,0,0,0.6);
	}

	.win .label {
		color: #f3c969;
		font-weight: 900;
		letter-spacing: 0.12em;
		font-size: 14px;
		text-transform: uppercase;
		text-shadow: 0 1px 0 rgba(0,0,0,0.6);
		margin-bottom: 6px;
		text-align: center;
	}

	.win .value {
		font-weight: 700;
		font-size: 36px;
		letter-spacing: 0.01em;
		text-shadow: 0 1px 0 rgba(0,0,0,0.7);
		line-height: 1;
	}

	.labels:not(.win) .value,
	.bet .value {
		font-weight: 900;
		font-size: 18px;
		letter-spacing: 0.02em;
		text-shadow: 0 2px 0 rgba(0,0,0,0.65);
	}

	.icon {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(255,255,255,0.8));
		color: #1a1a1a;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-weight: 800;
		font-size: 13px;
		box-shadow: 0 6px 16px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.6);
		cursor: pointer;
	}

	.utilities {
		display: flex;
		gap: 12px;
	}

	.utilities .icon {
		width: 24px;
		height: 24px;
		background: rgba(255,255,255,0.06);
		color: #fff;
		border: 1px solid rgba(255,255,255,0.28);
		font-size: 12px;
		backdrop-filter: blur(4px);
		box-shadow: 0 4px 12px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06);
	}

	.icon svg { width: 60%; height: 60%; fill: currentColor; display: block; }

	.icon-info { width: 48px; height: 48px; font-size: 20px; }

	.left-utils .icon { width: 30px; height: 30px; font-size: 15px; }

	.bet-controls {
		display: grid;
		gap: 6px;
		justify-items: center;
	}

	.round {
		border-radius: 50%;
		border: 1px solid rgba(255,255,255,0.28);
		background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
		color: #fff;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		line-height: 1;
		transition: transform 120ms ease, box-shadow 120ms ease, background 120ms ease, border-color 120ms ease;
		box-shadow: 0 6px 14px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06);
	}

	.round.small {
		width: 28px;
		height: 28px;
		font-size: 13px;
		font-weight: 800;
		line-height: 1;
		border-width: 2px;
	}

	.round.spin {
		width: 120px;
		height: 120px;
		border-width: 3px;
		font-size: 106px;
		font-weight: 700;
		box-shadow: 0 16px 36px rgba(0,0,0,0.5), inset 0 0px 0 rgba(255,255,255,0.06);
		background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.12), rgba(255,255,255,0.04));
		transform: translateY(-20px);
	}

	.round.spin img {
		width: 92%;
		height: 92%;
		object-fit: contain;
		pointer-events: none;
		filter: brightness(0) invert(1);
	}

	.round.auto {
		width: 55px;
		height: 55px;
		font-size: 14px;
		font-weight: 800;
	}

	.round:not(.spin):active {
		transform: translateY(0) scale(0.98);
		box-shadow: 0 6px 14px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04);
	}

	.round.spin:active {
		transform: translateY(-20px);
		box-shadow: 0 16px 36px rgba(0,0,0,0.5), inset 0 0px 0 rgba(255,255,255,0.06);
	}

	button { all: unset; }
	button:focus-visible { outline: 2px solid #ffd24d; outline-offset: 2px; border-radius: 9999px; }

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	/* Mobile L (425×812) - Portrait */
	@media (max-width: 425px) and (min-height: 700px) and (orientation: portrait) {
		.layout-desktop { display: none; }
		.layout-portrait { display: block; }

		.layout-portrait .top-actions {
			display: none;
		}

		.layout-portrait .controls {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			padding: 24px 12px 20px;
			background: linear-gradient(180deg, rgba(10,10,10,0.0) 0%, rgba(10,10,10,0.70) 45%, rgba(10,10,10,0.95) 100%);
			backdrop-filter: blur(12px);
		}
		.layout-portrait .controls .inner { max-width: none; }

		.layout-portrait .portrait-inner {
			width: 100%;
		}
		
		.layout-portrait .portrait-grid {
			display: grid;
			grid-template-columns: auto 1fr auto;
			grid-template-rows: auto auto;
			align-items: start;
			gap: 6px 0px;
			width: 100%;
			padding: 0 0;
			justify-content: space-between;
		}

		.layout-portrait .left-column {
			display: contents;
		}

		.layout-portrait .left-column .buybonus {
			grid-column: 1;
			grid-row: 1;
			align-self: center;
		}

		.layout-portrait .left-column .labels {
			grid-column: 1;
			grid-row: 2;
			justify-self: center;
		}

		.layout-portrait .center-column {
			display: contents;
		}

		.layout-portrait .center-buttons {
			grid-column: 2;
			grid-row: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			align-self: center;
			justify-self: center;
			gap: 6px;
		}

		.layout-portrait .center-column .bet {
			grid-column: 2;
			grid-row: 2;
			justify-self: center;
		}

		.layout-portrait .right-column {
			grid-column: 3;
			grid-row: 1 / 3;
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			align-self: center;
			justify-self: end;
			gap: 5px;
		}

		.layout-portrait .buybonus {
			min-width: 0;
			width: 65px;
			height: 65px;
			padding: 0;
			border: 2px solid rgba(92,46,6,0.9);
			border-radius: 50%;
			font-size: 10px;
			font-weight: 900;
			letter-spacing: 0.06em;
			text-transform: uppercase;
			background: radial-gradient(circle at 30% 30%, rgba(255,204,102,0.95), rgba(166,82,19,0.95));
			color: #341103;
			text-shadow: 0 1px 0 rgba(255,255,255,0.45);
			box-shadow: 0 12px 24px rgba(0,0,0,0.45), inset 0 2px 0 rgba(255,255,255,0.4);
		}
		.layout-portrait .buybonus:active { transform: scale(0.96); }

		.layout-portrait .round.small { 
			width: 32px; 
			height: 32px; 
			font-size: 18px; 
			font-weight: 800;
			border-width: 2px;
		}
		
		.layout-portrait .round.auto,
		.layout-portrait .round.menu { 
			width: 50px; 
			height: 50px; 
			font-size: 16px; 
			font-weight: 800;
		}
		.layout-portrait .round.menu { color: #fff; position: absolute; right: 2.5%;}
		.layout-portrait .round.auto { position: absolute; right: 2.5%; bottom: 50%;}

		.layout-portrait .round.menu .menu-icon { 
			position: absolute; 
			display: inline-block; 
			width: 22px; 
			height: 3px; 
			background: currentColor; 
			border-radius: 999px; 
		}
		.layout-portrait .round.menu .menu-icon::before,
		.layout-portrait .round.menu .menu-icon::after { 
			content: ''; 
			position: absolute; 
			left: 0; 
			width: 22px; 
			height: 3px; 
			background: currentColor; 
			border-radius: 999px; 
		}
		.layout-portrait .round.menu .menu-icon::before { transform: translateY(-5px); }
		.layout-portrait .round.menu .menu-icon::after { transform: translateY(5px); }

		.layout-portrait .round.spin { 
			width: 110px; 
			height: 110px; 
			font-size: 55px; 
			border-width: 3px;
			transform: none; 
			box-shadow: 0 16px 36px rgba(0,0,0,0.55), inset 0 2px 0 rgba(255,255,255,0.08); 
		}
		.layout-portrait .round.spin:active { 
			transform: scale(0.98); 
			box-shadow: 0 14px 32px rgba(0,0,0,0.52), inset 0 2px 0 rgba(255,255,255,0.06); 
		}
		.layout-portrait .round.spin img { width: 68%; height: 68%; }

		.layout-portrait .labels,
		.layout-portrait .bet,
		.layout-portrait .balance {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.layout-portrait .labels .label,
		.layout-portrait .bet .label,
		.layout-portrait .balance .label { 
			font-size: 14px !important;
			letter-spacing: 0.08em; 
			font-weight: 800;
			text-align: center;
			margin-bottom: 4px;
		}
		.layout-portrait .labels .value,
		.layout-portrait .bet .value,
		.layout-portrait .balance .value { 
			font-size: 24px !important;
			font-weight: 900;
			text-shadow: 0 3px 0 rgba(0,0,0,0.7);
			text-align: center;
			line-height: 1;
		}
	}

	/* Mobile M (375×667) - Portrait */
	@media (max-width: 424px) and (max-height: 699px) and (min-height: 600px) and (orientation: portrait) {
		.layout-desktop { display: none; }
		.layout-portrait { display: block; }

		.layout-portrait .top-actions {
			display: none;
		}

		.layout-portrait .controls {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			padding: 16px 8px 14px;
			background: linear-gradient(180deg, rgba(10,10,10,0.0) 0%, rgba(10,10,10,0.68) 50%, rgba(10,10,10,0.94) 100%);
			backdrop-filter: blur(10px);
		}
		.layout-portrait .controls .inner { max-width: none; }

		.layout-portrait .portrait-inner {
			width: 100%;
		}
		
		.layout-portrait .portrait-grid {
			display: grid;
			grid-template-columns: auto 1fr auto;
			grid-template-rows: auto auto;
			align-items: start;
			gap: 8px 8px;
			width: 100%;
			padding: 0 4px;
			justify-content: space-between;
		}

		.layout-portrait .left-column {
			display: contents;
		}

		.layout-portrait .left-column .buybonus {
			grid-column: 1;
			grid-row: 1;
			align-self: center;
		}

		.layout-portrait .left-column .labels {
			grid-column: 1;
			grid-row: 2;
			justify-self: center;
		}

		.layout-portrait .center-column {
			display: contents;
		}

		.layout-portrait .center-buttons {
			grid-column: 2;
			grid-row: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 6px;
			align-self: center;
			justify-self: center;
		}

		.layout-portrait .center-column .bet {
			grid-column: 2;
			grid-row: 2;
			justify-self: center;
		}

		.layout-portrait .right-column {
			grid-column: 3;
			grid-row: 1 / 3;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 5px;
			align-self: center;
		}

		.layout-portrait .buybonus {
			min-width: 0;
			width: 60px;
			height: 60px;
			padding: 0;
			border: 2px solid rgba(92,46,6,0.9);
			border-radius: 50%;
			font-size: 9px;
			font-weight: 900;
			letter-spacing: 0.05em;
			text-transform: uppercase;
			background: radial-gradient(circle at 30% 30%, rgba(255,204,102,0.95), rgba(166,82,19,0.95));
			color: #341103;
			text-shadow: 0 1px 0 rgba(255,255,255,0.45);
			box-shadow: 0 10px 20px rgba(0,0,0,0.45), inset 0 2px 0 rgba(255,255,255,0.4);
		}
		.layout-portrait .buybonus:active { transform: scale(0.96); }

		.layout-portrait .round.small { 
			width: 32px; 
			height: 32px; 
			font-size: 18px; 
			font-weight: 800;
			border-width: 2px;
		}
		
		.layout-portrait .round.auto,
		.layout-portrait .round.menu { 
			width: 48px; 
			height: 48px; 
			font-size: 16px; 
			font-weight: 800;
		}
		.layout-portrait .round.menu { color: #fff; }

		.layout-portrait .round.menu .menu-icon { 
			position: relative; 
			display: inline-block; 
			width: 20px; 
			height: 2px; 
			background: currentColor; 
			border-radius: 999px; 
		}
		.layout-portrait .round.menu .menu-icon::before,
		.layout-portrait .round.menu .menu-icon::after { 
			content: ''; 
			position: absolute; 
			left: 0; 
			width: 20px; 
			height: 2px; 
			background: currentColor; 
			border-radius: 999px; 
		}
		.layout-portrait .round.menu .menu-icon::before { transform: translateY(-5px); }
		.layout-portrait .round.menu .menu-icon::after { transform: translateY(5px); }

		.layout-portrait .round.spin { 
			width: 100px; 
			height: 100px; 
			font-size: 50px; 
			border-width: 2px;
			transform: none; 
			box-shadow: 0 14px 32px rgba(0,0,0,0.55), inset 0 2px 0 rgba(255,255,255,0.07); 
		}
		.layout-portrait .round.spin:active { 
			transform: scale(0.98); 
			box-shadow: 0 12px 28px rgba(0,0,0,0.52), inset 0 2px 0 rgba(255,255,255,0.06); 
		}
		.layout-portrait .round.spin img { width: 66%; height: 66%; }

		.layout-portrait .labels,
		.layout-portrait .bet,
		.layout-portrait .balance {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.layout-portrait .labels .label,
		.layout-portrait .bet .label,
		.layout-portrait .balance .label { 
			font-size: 12px !important;
			letter-spacing: 0.07em; 
			font-weight: 800;
			text-align: center;
			margin-bottom: 3px;
		}
		.layout-portrait .labels .value,
		.layout-portrait .bet .value,
		.layout-portrait .balance .value { 
			font-size: 20px !important;
			font-weight: 900;
			text-shadow: 0 2px 0 rgba(0,0,0,0.68);
			text-align: center;
			line-height: 1;
		}
	}

	/* Mobile S (320×568) - Portrait */
	@media (max-width: 374px) and (orientation: portrait) {
		.layout-desktop { display: none; }
		.layout-portrait { display: block; }

		.layout-portrait .top-actions {
			display: none;
		}

		.layout-portrait .controls {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			padding: 16px 8px 16px;
			background: linear-gradient(180deg, rgba(10,10,10,0.0) 0%, rgba(10,10,10,0.66) 55%, rgba(10,10,10,0.93) 100%);
			backdrop-filter: blur(8px);
		}
		.layout-portrait .controls .inner { max-width: none; }

		.layout-portrait .portrait-inner {
			width: 100%;
		}
		
		.layout-portrait .portrait-grid {
			display: grid;
			grid-template-columns: auto 1fr auto;
			grid-template-rows: auto auto;
			align-items: start;
			gap: 6px 6px;
			width: 100%;
			padding: 0 4px;
			justify-content: space-between;
		}

		.layout-portrait .left-column {
			display: contents;
		}

		.layout-portrait .left-column .buybonus {
			grid-column: 1;
			grid-row: 1;
			align-self: center;
		}

		.layout-portrait .left-column .labels {
			grid-column: 1;
			grid-row: 2;
			justify-self: center;
		}

		.layout-portrait .center-column {
			display: contents;
		}

		.layout-portrait .center-buttons {
			grid-column: 2;
			grid-row: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 4px;
			align-self: center;
			justify-self: center;
		}

		.layout-portrait .center-column .bet {
			grid-column: 2;
			grid-row: 2;
			justify-self: center;
		}

		.layout-portrait .right-column {
			grid-column: 3;
			grid-row: 1 / 3;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 4px;
			align-self: center;
		}

		.layout-portrait .buybonus {
			min-width: 0;
			width: 50px;
			height: 50px;
			padding: 0;
			border: 2px solid rgba(92,46,6,0.9);
			border-radius: 50%;
			font-size: 8px;
			font-weight: 900;
			letter-spacing: 0.04em;
			text-transform: uppercase;
			background: radial-gradient(circle at 30% 30%, rgba(255,204,102,0.95), rgba(166,82,19,0.95));
			color: #341103;
			text-shadow: 0 1px 0 rgba(255,255,255,0.45);
			box-shadow: 0 8px 16px rgba(0,0,0,0.42), inset 0 1px 0 rgba(255,255,255,0.4);
		}
		.layout-portrait .buybonus:active { transform: scale(0.95); }

		.layout-portrait .round.small { 
			width: 28px; 
			height: 28px; 
			font-size: 16px; 
			font-weight: 800;
			border-width: 2px;
		}
		
		.layout-portrait .round.auto,
		.layout-portrait .round.menu { 
			width: 40px; 
			height: 40px; 
			font-size: 14px; 
			font-weight: 800;
		}
		.layout-portrait .round.menu { color: #fff; }

		.layout-portrait .round.menu .menu-icon { 
			position: relative; 
			display: inline-block; 
			width: 18px; 
			height: 2px; 
			background: currentColor; 
			border-radius: 999px; 
		}
		.layout-portrait .round.menu .menu-icon::before,
		.layout-portrait .round.menu .menu-icon::after { 
			content: ''; 
			position: absolute; 
			left: 0; 
			width: 18px; 
			height: 2px; 
			background: currentColor; 
			border-radius: 999px; 
		}
		.layout-portrait .round.menu .menu-icon::before { transform: translateY(-4px); }
		.layout-portrait .round.menu .menu-icon::after { transform: translateY(4px); }

		.layout-portrait .round.spin { 
			width: 85px; 
			height: 85px; 
			font-size: 42px; 
			border-width: 2px;
			transform: none; 
			box-shadow: 0 10px 24px rgba(0,0,0,0.52), inset 0 1px 0 rgba(255,255,255,0.06); 
		}
		.layout-portrait .round.spin:active { 
			transform: scale(0.97); 
			box-shadow: 0 8px 20px rgba(0,0,0,0.48), inset 0 1px 0 rgba(255,255,255,0.05); 
		}
		.layout-portrait .round.spin img { width: 64%; height: 64%; }

		.layout-portrait .labels,
		.layout-portrait .bet,
		.layout-portrait .balance {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.layout-portrait .labels .label,
		.layout-portrait .bet .label,
		.layout-portrait .balance .label { 
			font-size: 10px !important;
			letter-spacing: 0.05em; 
			font-weight: 800;
			text-align: center;
			margin-bottom: 3px;
		}
		.layout-portrait .labels .value,
		.layout-portrait .bet .value,
		.layout-portrait .balance .value { 
			font-size: 16px !important;
			font-weight: 900;
			text-shadow: 0 2px 0 rgba(0,0,0,0.66);
			text-align: center;
			line-height: 1;
		}
	}

	/* Fallback for narrow viewports on desktop browsers */
	@media (max-aspect-ratio: 3/4) and (min-width: 426px) {
		.layout-desktop { display: none; }
		.layout-portrait { display: block; }

		.layout-portrait .top-actions {
			display: none;
		}

		.layout-portrait .controls {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			padding: 24px 12px 20px;
			background: linear-gradient(180deg, rgba(10,10,10,0.0) 0%, rgba(10,10,10,0.70) 45%, rgba(10,10,10,0.95) 100%);
			backdrop-filter: blur(12px);
		}
		.layout-portrait .controls .inner { max-width: none; }

		.layout-portrait .portrait-inner {
			width: 100%;
		}
		
		.layout-portrait .portrait-grid {
			display: grid;
			grid-template-columns: auto 1fr auto;
			align-items: start;
			gap: 12px;
			width: 100%;
			padding: 0 8px;
		}

		.layout-portrait .left-column {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			gap: 8px;
			min-height: 100%;
		}

		.layout-portrait .center-column {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-self: center;
			gap: 8px;
		}

		.layout-portrait .center-buttons {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 8px;
		}

		.layout-portrait .right-column {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 6px;
		}

		.layout-portrait .buybonus {
			min-width: 0;
			width: 70px;
			height: 70px;
			padding: 0;
			border: 2px solid rgba(92,46,6,0.9);
			border-radius: 50%;
			font-size: 11px;
			font-weight: 900;
			letter-spacing: 0.06em;
			text-transform: uppercase;
			background: radial-gradient(circle at 30% 30%, rgba(255,204,102,0.95), rgba(166,82,19,0.95));
			color: #341103;
			text-shadow: 0 1px 0 rgba(255,255,255,0.45);
			box-shadow: 0 12px 24px rgba(0,0,0,0.45), inset 0 2px 0 rgba(255,255,255,0.4);
		}
		.layout-portrait .buybonus:active { transform: scale(0.96); }

		.layout-portrait .round.small { 
			width: 35px; 
			height: 35px; 
			font-size: 20px; 
			font-weight: 800;
			border-width: 2px;
		}
		
		.layout-portrait .round.auto,
		.layout-portrait .round.menu { 
			width: 56px; 
			height: 56px; 
			font-size: 18px; 
			font-weight: 800;
		}
		.layout-portrait .round.menu { color: #fff; }

		.layout-portrait .round.menu .menu-icon { 
			position: relative; 
			display: inline-block; 
			width: 24px; 
			height: 3px; 
			background: currentColor; 
			border-radius: 999px; 
		}
		.layout-portrait .round.menu .menu-icon::before,
		.layout-portrait .round.menu .menu-icon::after { 
			content: ''; 
			position: absolute; 
			left: 0; 
			width: 24px; 
			height: 3px; 
			background: currentColor; 
			border-radius: 999px; 
		}
		.layout-portrait .round.menu .menu-icon::before { transform: translateY(-6px); }
		.layout-portrait .round.menu .menu-icon::after { transform: translateY(6px); }

		.layout-portrait .round.spin { 
			width: 120px; 
			height: 120px; 
			font-size: 60px; 
			border-width: 3px;
			transform: none; 
			box-shadow: 0 16px 36px rgba(0,0,0,0.55), inset 0 2px 0 rgba(255,255,255,0.08); 
		}
		.layout-portrait .round.spin:active { 
			transform: scale(0.98); 
			box-shadow: 0 14px 32px rgba(0,0,0,0.52), inset 0 2px 0 rgba(255,255,255,0.06); 
		}
		.layout-portrait .round.spin img { width: 68%; height: 68%; }

		.layout-portrait .labels,
		.layout-portrait .bet,
		.layout-portrait .balance {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.layout-portrait .labels .label,
		.layout-portrait .bet .label,
		.layout-portrait .balance .label { 
			font-size: 14px !important;
			letter-spacing: 0.08em; 
			font-weight: 800;
			text-align: center;
			margin-bottom: 4px;
		}
		.layout-portrait .labels .value,
		.layout-portrait .bet .value,
		.layout-portrait .balance .value { 
			font-size: 24px !important;
			font-weight: 900;
			text-shadow: 0 3px 0 rgba(0,0,0,0.7);
			text-align: center;
			line-height: 1;
		}
	}

	/* Laptop (1024x576) - Scale to ~85% */
	@media (max-width: 1199px) and (min-width: 901px) {
		.controls {
			top: 81%;
			padding: 10px 14px;
		}

		.controls .inner {
			max-width: 900px;
			gap: 12px;
		}

		.left {
			gap: 8px;
		}

		.left-stack {
			gap: 5px;
		}

		.icon {
			width: 27px;
			height: 27px;
			font-size: 11px;
		}

		.icon-info {
			width: 41px;
			height: 41px;
			font-size: 17px;
		}

		.left-utils .icon {
			width: 26px;
			height: 26px;
			font-size: 13px;
		}

		.utilities {
			gap: 10px;
		}

		.buybonus {
			min-width: 76px;
			height: 31px;
			font-size: 10px;
			border-radius: 5px;
		}

		.labels .label,
		.bet .label {
			font-size: 10px;
			margin-bottom: 3px;
		}

		.win .label {
			font-size: 12px;
			margin-bottom: 5px;
		}

		.win .value {
			font-size: 30px;
		}

		.labels:not(.win) .value,
		.bet .value {
			font-size: 15px;
		}

		.right {
			gap: 13px;
		}

		.bet-controls {
			gap: 5px;
		}

		.round.small {
			width: 24px;
			height: 24px;
			font-size: 11px;
		}

		.round.spin {
			width: 102px;
			height: 102px;
			border-width: 3px;
			transform: translateY(-8px);
		}

		.round.spin:active {
			transform: translateY(-8px);
		}

		.round.auto {
			width: 47px;
			height: 47px;
			font-size: 12px;
		}

		.round:not(.spin):active {
			transform: translateY(0) scale(0.98);
		}
	}

	/* Medium desktop (800x450) */
	@media (max-width: 900px) and (min-width: 600px) {
		.controls {
			top: 78%;
			padding: 6px 10px;
		}

		.controls .inner {
			max-width: 750px;
			gap: 6px;
			padding: 0;
		}

		.left {
			gap: 5px;
		}

		.left-stack {
			gap: 3px;
		}

		.icon {
			width: 18px;
			height: 18px;
			font-size: 8px;
			box-shadow: 0 4px 11px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.6);
		}

		.icon-info {
			width: 27px;
			height: 27px;
			font-size: 11px;
		}

		.left-utils .icon {
			width: 17px;
			height: 17px;
			font-size: 8px;
		}

		.utilities {
			gap: 6px;
		}

		.utilities .icon svg {
			width: 58%;
			height: 58%;
		}

		.buybonus {
			min-width: 52px;
			height: 20px;
			font-size: 7px;
			border-radius: 4px;
		}

		.labels .label,
		.bet .label {
			font-size: 7px;
			margin-bottom: 2px;
		}

		.win .label {
			font-size: 8px;
			margin-bottom: 3px;
		}

		.win .value {
			font-size: 20px;
		}

		.labels:not(.win) .value,
		.bet .value {
			font-size: 10px;
		}

		.right {
			gap: 8px;
		}

		.bet-controls {
			gap: 3px;
		}

		.round.small {
			width: 16px;
			height: 16px;
			font-size: 7px;
			border-width: 1px;
		}

		.round.spin {
			width: 68px;
			height: 68px;
			border-width: 2px;
			transform: translateY(-3px);
		}

		.round.spin:active {
			transform: translateY(-3px);
		}

		.round.spin img {
			width: 92%;
			height: 92%;
		}

		.round.auto {
			width: 31px;
			height: 31px;
			font-size: 8px;
		}

		.round:not(.spin):active {
			transform: translateY(0) scale(0.98);
		}
	}

	/* Small desktop (400x225) */
	@media (max-width: 599px) {
		.controls {
			top: 75%;
			padding: 4px 8px;
			border-top: 1px solid rgba(255,255,255,0.12);
			box-shadow: 0 -6px 20px rgba(0,0,0,0.6);
		}

		.controls .inner {
			max-width: 380px;
			gap: 4px;
			padding: 0;
		}

		.left {
			gap: 3px;
		}

		.left-stack {
			gap: 2px;
		}

		.icon {
			width: 11px;
			height: 11px;
			font-size: 5px;
			box-shadow: 0 2px 5px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.6);
		}

		.icon-info {
			width: 16px;
			height: 16px;
			font-size: 7px;
		}

		.left-utils .icon {
			width: 10px;
			height: 10px;
			font-size: 5px;
		}

		.utilities {
			gap: 4px;
		}

		.utilities .icon svg {
			width: 55%;
			height: 55%;
		}

		.buybonus {
			min-width: 30px;
			height: 12px;
			font-size: 4px;
			border-radius: 2px;
			padding: 0 4px;
		}

		.labels .label,
		.bet .label {
			font-size: 4px;
			margin-bottom: 1px;
		}

		.win .label {
			font-size: 5px;
			margin-bottom: 2px;
		}

		.win .value {
			font-size: 12px;
		}

		.labels:not(.win) .value,
		.bet .value {
			font-size: 6px;
		}

		.right {
			gap: 5px;
		}

		.bet-controls {
			gap: 2px;
		}

		.round.small {
			width: 9px;
			height: 9px;
			font-size: 4px;
			border-width: 1px;
		}

		.round.spin {
			width: 40px;
			height: 40px;
			border-width: 1px;
			transform: translateY(-2px);
			box-shadow: 0 8px 18px rgba(0,0,0,0.5), inset 0 0px 0 rgba(255,255,255,0.06);
		}

		.round.spin:active {
			transform: translateY(-2px);
			box-shadow: 0 8px 18px rgba(0,0,0,0.5), inset 0 0px 0 rgba(255,255,255,0.06);
		}

		.round.spin img {
			width: 92%;
			height: 92%;
		}

		.round.auto {
			width: 18px;
			height: 18px;
			font-size: 5px;
		}

		.round:not(.spin):active {
			transform: translateY(0) scale(0.98);
		}
	}
</style>


