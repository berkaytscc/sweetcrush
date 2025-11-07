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
			<div class="board" aria-label="Game board"></div>
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
					<div class="primary-row">
						<button class="buybonus portrait" type="button" aria-label="Buy Bonus">BUY BONUS</button>
						<button class="round small" type="button" aria-label="Decrease bet">−</button>
						<button class="round spin" type="button" aria-label="Spin">
							<img src="/UI/spin-idle.webp" alt="" aria-hidden="true" />
							<span class="sr-only">Spin</span>
						</button>
						<button class="round small" type="button" aria-label="Increase bet">+</button>
						<button class="round auto" type="button" aria-label="Auto spins">A</button>
						<button class="round menu" type="button" aria-label="Menu">
							<span class="menu-icon" aria-hidden="true"></span>
							<span class="sr-only">Menu</span>
						</button>
					</div>
					<div class="meter-row">
						<div class="labels balance">
							<div class="label">BALANCE</div>
							<div class="value">$1,000.00</div>
						</div>
						<div class="bet">
							<div class="label">BET</div>
							<div class="value">$1.00</div>
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
		background: #828080;
		overflow: hidden;
	}

	/* Show only one layout at a time */
	.layout-portrait { display: none; }
	.layout-desktop { display: block; }

	@media (orientation: portrait) {
		.layout-desktop { display: none; }
		.layout-portrait { display: block; }

		.layout-portrait .board {
			top: 140px;
			left: 50%;
			transform: translate(-50%, 0);
			width: 340px;
			height: 360px;
			background: linear-gradient(180deg, #1a1a1a 0%, #050505 100%);
			border-radius: 18px;
			box-shadow: 0 24px 48px rgba(0,0,0,0.55), inset 0 2px 0 rgba(255,255,255,0.08);
		}

		.layout-portrait .top-actions {
			position: absolute;
			top: 36px;
			left: 50%;
			transform: translateX(-50%);
			display: flex;
			align-items: center;
			gap: 28px;
			z-index: 2;
		}

		.layout-portrait .top-actions .utilities { gap: 20px; }
		.layout-portrait .icon { width: 44px; height: 44px; font-size: 18px; }
		.layout-portrait .icon-info { width: 56px; height: 56px; font-size: 22px; }
		.layout-portrait .left-utils .icon { width: 44px; height: 44px; font-size: 18px; }

		.layout-portrait .controls {
			padding: 56px 32px 64px;
			background: linear-gradient(180deg, rgba(10,10,10,0.0) 0%, rgba(10,10,10,0.65) 55%, rgba(10,10,10,0.92) 100%);
			backdrop-filter: blur(10px);
		}
		.layout-portrait .controls .inner { max-width: none; }

		.layout-portrait .portrait-inner {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 44px;
		}
		.layout-portrait .portrait-inner .primary-row { display: flex; align-items: center; justify-content: center; gap: 18px; width: 100%; }
		.layout-portrait .portrait-inner .meter-row { display: flex; align-items: center; justify-content: center; gap: 52px; text-align: center; }

		.layout-portrait .buybonus {
			min-width: 0;
			width: 92px;
			height: 92px;
			padding: 0;
			border: 3px solid rgba(92,46,6,0.9);
			border-radius: 50%;
			font-size: 13px;
			letter-spacing: 0.08em;
			text-transform: uppercase;
			background: radial-gradient(circle at 30% 30%, rgba(255,204,102,0.95), rgba(166,82,19,0.95));
			color: #341103;
			text-shadow: 0 2px 0 rgba(255,255,255,0.45);
			box-shadow: 0 14px 26px rgba(0,0,0,0.45), inset 0 2px 0 rgba(255,255,255,0.4);
		}
		.layout-portrait .buybonus:active { transform: scale(0.97); }

		.layout-portrait .round.small { width: 62px; height: 62px; font-size: 30px; }
		.layout-portrait .round.auto,
		.layout-portrait .round.menu { width: 72px; height: 72px; font-size: 20px; }
		.layout-portrait .round.menu { color: #fff; }

		.layout-portrait .round.menu .menu-icon { position: relative; display: inline-block; width: 28px; height: 3px; background: currentColor; border-radius: 999px; }
		.layout-portrait .round.menu .menu-icon::before,
		.layout-portrait .round.menu .menu-icon::after { content: ''; position: absolute; left: 0; width: 28px; height: 3px; background: currentColor; border-radius: 999px; }
		.layout-portrait .round.menu .menu-icon::before { transform: translateY(-6px); }
		.layout-portrait .round.menu .menu-icon::after { transform: translateY(6px); }

		.layout-portrait .round.spin { width: 160px; height: 160px; font-size: 82px; transform: none; box-shadow: 0 18px 40px rgba(0,0,0,0.55), inset 0 2px 0 rgba(255,255,255,0.06); }
		.layout-portrait .round.spin:active { transform: none; box-shadow: 0 18px 40px rgba(0,0,0,0.55), inset 0 2px 0 rgba(255,255,255,0.06); }
		.layout-portrait .round.spin img { width: 68%; height: 68%; }

		.layout-portrait .labels .label,
		.layout-portrait .bet .label { font-size: 14px; letter-spacing: 0.08em; }
		.layout-portrait .labels .value,
		.layout-portrait .bet .value { font-size: 26px; text-shadow: 0 3px 0 rgba(0,0,0,0.65); }
	}

	/* Fallback for narrow viewports on desktop browsers */
	@media (max-aspect-ratio: 3/4) {
		.layout-desktop { display: none; }
		.layout-portrait { display: block; }
	}

	/* Base desktop layout (1200x675) */
	.board {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, calc(-50% - 60px)); /* slight upward offset */
		width: 720px;
		height: 460px;
		background: #ffffff;
		border-radius: 8px;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.03);
	}

	.controls {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 82%;
		background: linear-gradient(180deg, rgba(10,10,10,0.0) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.85) 100%);
		backdrop-filter: blur(2px);
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
		color: #f3c969; /* warm yellow */
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

	/* Make info button 1.5x larger than base icon */
	.icon-info { width: 48px; height: 48px; font-size: 20px; }

	/* Make gear and sound 1.25x larger inside the left stack */
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
		transform: translateY(-10px);
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
		transform: translateY(-10px);
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

	/* Medium desktop (800x450) */
	@media (max-width: 900px) and (min-width: 600px) {
		.board {
			width: 420px;
			height: 268px;
			transform: translate(-50%, calc(-50% - 15px));
			border-radius: 5px;
		}

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
		.board {
			width: 240px;
			height: 153px;
			transform: translate(-50%, calc(-50% - 12px));
			border-radius: 3px;
			box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.03);
		}

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


