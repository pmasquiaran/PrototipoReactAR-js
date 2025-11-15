function SolarSystemAR() {
	return (
		<div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
			<a-scene
				vr-mode-ui="enabled: false"
				embedded
				arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
				renderer="logarithmicDepthBuffer: true;"
			>

				<a-marker type="pattern" url="src/marcadores/sol.patt" id="sol-marker" emitevents="true">
					<a-entity id="sol-container" position="0 0 0" scale="0.5 0.5 0.5">						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="src/modelos/sol.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker type="pattern" url="src/marcadores/mercurio.patt" id="mercurio-marker" emitevents="true">
					<a-entity id="mercurio-container" position="0 0 0" scale="0.5 0.5 0.5">						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="src/modelos/mercurio.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker type="pattern" url="src/marcadores/venus.patt" id="venus-marker" emitevents="true">
					<a-entity id="venus-container" position="0 0 0" scale="0.5 0.5 0.5">						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="src/modelos/venus.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker type="pattern" url="src/marcadores/tierra.patt" id="tierra-marker" emitevents="true">
					<a-entity id="tierra-container" position="0 0 0" scale="0.5 0.5 0.5">						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="src/modelos/tierra.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker type="pattern" url="src/marcadores/luna.patt" id="luna-marker" emitevents="true">
					<a-entity id="luna-container" position="0 0 0" scale="0.5 0.5 0.5">						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="src/modelos/luna.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker type="pattern" url="src/marcadores/marte.patt" id="marte-marker" emitevents="true">
					<a-entity id="marte-container" position="0 0 0" scale="0.5 0.5 0.5">						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="src/modelos/marte.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker type="pattern" url="src/marcadores/jupiter.patt" id="jupiter-marker" emitevents="true">
					<a-entity id="jupiter-container" position="0 0 0" scale="0.5 0.5 0.5">						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="src/modelos/jupiter.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker type="pattern" url="src/marcadores/saturno.patt" id="saturno-marker" emitevents="true">
					<a-entity id="saturno-container" position="0 0 0" scale="0.5 0.5 0.5">						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="src/modelos/saturno.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker type="pattern" url="src/marcadores/urano.patt" id="urano-marker" emitevents="true">
					<a-entity id="urano-container" position="0 0 0" scale="0.5 0.5 0.5">						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="src/modelos/urano.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker type="pattern" url="src/marcadores/neptuno.patt" id="neptuno-marker" emitevents="true">
					<a-entity id="neptuno-container" position="0 0 0" scale="0.5 0.5 0.5">						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="src/modelos/neptuno.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker type="pattern" url="src/marcadores/pluton.patt" id="pluton-marker" emitevents="true">
					<a-entity id="pluton-container" position="0 0 0" scale="0.5 0.5 0.5">						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="src/modelos/pluton.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-entity 
					camera="active: true; fov: 110"
					arjs-camera="smooth: true; smoothCount: 5; smoothTolerance: 0.01; smoothThreshold: 2"
				></a-entity>

			</a-scene>
		</div>
	);
}

export default SolarSystemAR
