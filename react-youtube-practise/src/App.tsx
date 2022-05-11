import React, { useState } from "react";

import YouTube, { YouTubePlayer } from "react-youtube";

const VIDEOS = ["aiwf_XqlbUM"];

export default function App() {
	const [player, setPlayer] = useState<YouTubePlayer>();
	const [videoIndex, setVideoIndex] = useState(0);
	const [width, setWidth] = useState(600);
	const [hidden, setHidden] = useState(false);
	const [autoplay, setAutoplay] = useState(false);

	return (
		<div className="App">
			<div style={{ display: "flex", marginBottom: "1em" }}>
				<button type="button" onClick={() => player?.seekTo(120, true)}>
					Seek to 2 minutes
				</button>
				<button
					type="button"
					onClick={() => setVideoIndex((videoIndex + 1) % VIDEOS.length)}>
					Change video
				</button>
				<label>
					<input
						type="range"
						min="300"
						max="1080"
						value={width}
						onChange={(event) => setWidth(event.currentTarget.valueAsNumber)}
					/>
					Width ({width}px)
				</label>
				<button type="button" onClick={() => setHidden(!hidden)}>
					{hidden ? "Show" : "Hide"}
				</button>
				<label>
					<input
						type="checkbox"
						checked={autoplay}
						onChange={(event) => setAutoplay(event.currentTarget.checked)}
					/>
					Autoplaying
				</label>
			</div>

			{hidden ? (
				"mysterious"
			) : (
				<YouTube
					videoId={VIDEOS[videoIndex]}
					opts={{
						width,
						height: width * (9 / 16),
						playerVars: {
							autoplay: autoplay ? 1 : 0,
						},
					}}
					className="container"
					onReady={(event) => setPlayer(event.target)}
				/>
			)}
		</div>
	);
}
