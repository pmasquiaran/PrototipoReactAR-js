function SolarSystemAR() {
	return (
		<div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
			<a-scene
				vr-mode-ui="enabled: false"
				embedded
				arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;"
				renderer="logarithmicDepthBuffer: true;"
			>

				<a-entity camera></a-entity>

				<a-marker type="pattern" url="/marcadores/sol.patt" id="sol-marker" emitevents="true">
					<a-entity id="sol-container" position="0 0.5 0" rotation="270 0 0" scale="0.5 0.5 0.5">						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="/modelos/sol.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker type="pattern" url="/marcadores/mercurio.patt" id="mercurio-marker" emitevents="true">
					<a-entity id="mercurio-container" position="0 0.5 0" rotation="270 0 0" scale="0.5 0.5 0.5">						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="/modelos/mercurio.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker type="pattern" url="/marcadores/venus.patt" id="venus-marker" emitevents="true">
					<a-entity id="venus-container" position="0 0.5 0" rotation="270 0 0" scale="0.5 0.5 0.5">						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="/modelos/venus.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker type="pattern" url="/marcadores/tierra.patt" id="tierra-marker" emitevents="true">
					<a-entity id="tierra-container" position="0 0.5 0" rotation="270 0 0" scale="0.5 0.5 0.5">						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="/modelos/tierra.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker type="pattern" url="/marcadores/luna.patt" id="luna-marker" emitevents="true">
					<a-entity id="luna-container" position="0 0.5 0" rotation="270 0 0" scale="0.5 0.5 0.5">						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="/modelos/luna.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker type="pattern" url="/marcadores/marte.patt" id="marte-marker" emitevents="true">
					<a-entity id="marte-container" position="0 0.5 0" rotation="270 0 0" scale="0.5 0.5 0.5">						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="/modelos/marte.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker type="pattern" url="/marcadores/jupiter.patt" id="jupiter-marker" emitevents="true">
					<a-entity id="jupiter-container" position="0 0.5 0" rotation="270 0 0" scale="0.5 0.5 0.5">						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="/modelos/jupiter.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker type="pattern" url="/marcadores/saturno.patt" id="saturno-marker" emitevents="true">
					<a-entity id="saturno-container" position="0 0.5 0" rotation="270 0 0" scale="0.5 0.5 0.5">						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="/modelos/saturno.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker type="pattern" url="/marcadores/urano.patt" id="urano-marker" emitevents="true">
					<a-entity id="urano-container" position="0 0.5 0" rotation="270 0 0" scale="0.5 0.5 0.5">						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="/modelos/urano.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker type="pattern" url="/marcadores/neptuno.patt" id="neptuno-marker" emitevents="true">
					<a-entity id="neptuno-container" position="0 0.5 0" rotation="270 0 0" scale="0.5 0.5 0.5">						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="/modelos/neptuno.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker type="pattern" url="/marcadores/pluton.patt" id="pluton-marker" emitevents="true">
					<a-entity id="pluton-container" position="0 0.5 0" rotation="270 0 0" scale="0.5 0.5 0.5">						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="/modelos/pluton.glb"
						></a-entity>
					</a-entity>
				</a-marker>

			</a-scene>
		</div>
	);
}

export default SolarSystemAR
