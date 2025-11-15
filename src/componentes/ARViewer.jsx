function ARViewer() {
	return (
		<div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
			<a-scene
				vr-mode-ui="enabled: false"
				embedded
				arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
				renderer="logarithmicDepthBuffer: true;"
			>
			{/* MARCADOR TIPO HIRO */}
			<a-marker preset="hiro">
				<a-box
					position="0 0.5 0"
					material="color: red;"
					animation="property: rotation; to: 0 360 0; loop: true; dur: 4000"
				></a-box>
			</a-marker>

			{/* CÁMARA */}
			<a-entity camera></a-entity>
			</a-scene>
		</div>
	);
}

export default ARViewer
