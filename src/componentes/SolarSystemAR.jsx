function SolarSystemAR() {
	return (
		<div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
			<a-scene
			embedded
			arjs="sourceType: webcam; debugUIEnabled: false;"
			>

				{/* Sol */}
				<a-marker type="pattern" url="/marcadores/sol.patt" id="sol-marker">
					<a-entity
						animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
						gltf-model="/modelos/sol.glb"
						scale="0.5 0.5 0.5"
					></a-entity>
				</a-marker>

				{/* Mercurio */}
				<a-marker type="pattern" url="/marcadores/mercurio.patt" id="mercurio-marker">
					<a-entity
						animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
						gltf-model="/modelos/mercurio.glb"
						scale="0.5 0.5 0.5"
					></a-entity>
				</a-marker>

				{/* Venus */}
				<a-marker type="pattern" url="/marcadores/venus.patt" id="venus-marker">
					<a-entity
						animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
						gltf-model="/modelos/venus.glb"
						scale="0.5 0.5 0.5"
					></a-entity>
				</a-marker>

				{/* Tierra */}
				<a-marker type="pattern" url="/marcadores/tierra.patt" id="tierra-marker">
					<a-entity
						animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
						gltf-model="/modelos/tierra.glb"
						scale="0.5 0.5 0.5"
					></a-entity>
				</a-marker>

				{/* Luna */}
				<a-marker type="pattern" url="/marcadores/luna.patt" id="luna-marker">
					<a-entity
						animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
						gltf-model="/modelos/luna.glb"
						scale="0.5 0.5 0.5"
					></a-entity>
				</a-marker>

				{/* Marte */}
				<a-marker type="pattern" url="/marcadores/marte.patt" id="marte-marker">
					<a-entity
						animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
						gltf-model="/modelos/marte.glb"
						scale="0.5 0.5 0.5"
					></a-entity>
				</a-marker>

				{/* Júpiter */}
				<a-marker type="pattern" url="/marcadores/jupiter.patt" id="jupiter-marker">
					<a-entity
						animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
						gltf-model="/modelos/jupiter.glb"
						scale="0.5 0.5 0.5"
					></a-entity>
				</a-marker>

				{/* Saturno */}
				<a-marker type="pattern" url="/marcadores/saturno.patt" id="saturno-marker">
					<a-entity
						animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
						gltf-model="/modelos/saturno.glb"
						scale="0.5 0.5 0.5"
					></a-entity>
				</a-marker>

				{/* Urano */}
				<a-marker type="pattern" url="/marcadores/urano.patt" id="urano-marker">
					<a-entity
						animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
						gltf-model="/modelos/urano.glb"
						scale="0.5 0.5 0.5"
					></a-entity>
				</a-marker>

				{/* Neptuno */}
				<a-marker type="pattern" url="/marcadores/neptuno.patt" id="neptuno-marker">
					<a-entity
						animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
						gltf-model="/modelos/neptuno.glb"
						scale="0.5 0.5 0.5"
					></a-entity>
				</a-marker>

				{/* Plutón */}
				<a-marker type="pattern" url="/marcadores/pluton.patt" id="pluton-marker">
					<a-entity
						animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
						gltf-model="/modelos/pluton.glb"
						scale="0.5 0.5 0.5"
					></a-entity>
				</a-marker>

				<a-entity 
					camera="fov: 100" 
					arjs-camera="smooth: true; smoothCount: 5; smoothTolerance: 0.01; smoothThreshold: 2"
				></a-entity>

			</a-scene>
		</div>
	);
}

export default SolarSystemAR
