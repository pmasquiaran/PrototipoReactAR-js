function SolarSystemAR() {
	return (
		<div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
			<a-scene
				vr-mode-ui="enabled: false"
				embedded
				arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;"
				renderer="logarithmicDepthBuffer: true;"
			>

				<a-entity
					camera="active: true"
					arjs-camera="smooth: true; smoothCount: 5; smoothTolerance: 0.01; smoothThreshold: 2"
				></a-entity>

				<a-marker
					type="pattern"
					url="/marcadores/sol.patt"
					id="sol-marker"
					emitevents="true"
					smooth="true"
					smoothCount="10"
					smoothTolerance="0.01"
					smoothThreshold="5"
					control-planeta="target: sol"
				>
					<a-entity
						id="sol-container"
						position="0 0.5 0"
						rotation="270 0 0"
						scale="0.3 0.3 0.3"
						class="planeta"
						visible="false"
						gltf-model="#solModel"
					>						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="/modelos/sol.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker
					type="pattern"
					url="/marcadores/mercurio.patt"
					id="mercurio-marker"
					emitevents="true"
					smooth="true"
					smoothCount="10"
					smoothTolerance="0.01"
					smoothThreshold="5"
					control-planeta="target: mercurio"
				>
					<a-entity
						id="mercurio-container"
						position="0 0.5 0"
						rotation="270 0 0"
						scale="0.3 0.3 0.3"
						class="planeta"
						visible="false"
						gltf-model="#mercurioModel"
					>						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="/modelos/mercurio.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker
					type="pattern"
					url="/marcadores/venus.patt"
					id="venus-marker"
					emitevents="true"
					smooth="true"
					smoothCount="10"
					smoothTolerance="0.01"
					smoothThreshold="5"
					control-planeta="target: venus"
				>
					<a-entity
						id="venus-container"
						position="0 0.5 0"
						rotation="270 0 0"
						scale="0.3 0.3 0.3"
						class="planeta"
						visible="false"
						gltf-model="#venusModel"
					>						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="/modelos/venus.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker
					type="pattern"
					url="/marcadores/tierra.patt"
					id="tierra-marker"
					emitevents="true"
					smooth="true"
					smoothCount="10"
					smoothTolerance="0.01"
					smoothThreshold="5"
					control-planeta="target: tierra"
				>
					<a-entity
						id="tierra-container"
						position="0 0.5 0"
						rotation="270 0 0"
						scale="0.3 0.3 0.3"
						class="planeta"
						visible="false"
						gltf-model="#tierraModel"
					>						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="/modelos/tierra.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker
					type="pattern"
					url="/marcadores/luna.patt"
					id="luna-marker"
					emitevents="true"
					smooth="true"
					smoothCount="10"
					smoothTolerance="0.01"
					smoothThreshold="5"
					control-planeta="target: luna"
				>
					<a-entity
						id="luna-container"
						position="0 0.5 0"
						rotation="270 0 0"
						scale="0.3 0.3 0.3"
						class="planeta"
						visible="false"
						gltf-model="#lunaModel"
					>						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="/modelos/luna.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker
					type="pattern"
					url="/marcadores/marte.patt"
					id="marte-marker"
					emitevents="true"
					smooth="true"
					smoothCount="10"
					smoothTolerance="0.01"
					smoothThreshold="5"
					control-planeta="target: marte"
				>
					<a-entity
						id="marte-container"
						position="0 0.5 0"
						rotation="270 0 0"
						scale="0.3 0.3 0.3"
						class="planeta"
						visible="false"
						gltf-model="#marteModel"
					>						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="/modelos/marte.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker
					type="pattern"
					url="/marcadores/jupiter.patt"
					id="jupiter-marker"
					emitevents="true"
					smooth="true"
					smoothCount="10"
					smoothTolerance="0.01"
					smoothThreshold="5"
					control-planeta="target: jupiter"
				>
					<a-entity
						id="jupiter-container"
						position="0 0.5 0"
						rotation="270 0 0"
						scale="0.3 0.3 0.3"
						class="planeta"
						visible="false"
						gltf-model="#jupiterModel"
					>						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="/modelos/jupiter.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker
					type="pattern"
					url="/marcadores/saturno.patt"
					id="saturno-marker"
					emitevents="true"
					smooth="true"
					smoothCount="10"
					smoothTolerance="0.01"
					smoothThreshold="5"
					control-planeta="target: saturno"
				>
					<a-entity
						id="saturno-container"
						position="0 0.5 0"
						rotation="270 0 0"
						scale="0.3 0.3 0.3"
						class="planeta"
						visible="false"
						gltf-model="#saturnoModel"
					>						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="/modelos/saturno.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker
					type="pattern"
					url="/marcadores/urano.patt"
					id="urano-marker"
					emitevents="true"
					smooth="true"
					smoothCount="10"
					smoothTolerance="0.01"
					smoothThreshold="5"
					control-planeta="target: urano"
				>
					<a-entity
						id="urano-container"
						position="0 0.5 0"
						rotation="270 0 0"
						scale="0.3 0.3 0.3"
						class="planeta"
						visible="false"
						gltf-model="#uranoModel"
					>						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="/modelos/urano.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker
					type="pattern"
					url="/marcadores/neptuno.patt"
					id="neptuno-marker"
					emitevents="true"
					smooth="true"
					smoothCount="10"
					smoothTolerance="0.01"
					smoothThreshold="5"
					control-planeta="target: neptuno"
				>
					<a-entity
						id="neptuno-container"
						position="0 0.5 0"
						rotation="270 0 0"
						scale="0.3 0.3 0.3"
						class="planeta"
						visible="false"
						gltf-model="#neptunoModel"
					>						
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
							gltf-model="/modelos/neptuno.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker
					type="pattern"
					url="/marcadores/pluton.patt"
					id="pluton-marker"
					emitevents="true"
					smooth="true"
					smoothCount="10"
					smoothTolerance="0.01"
					smoothThreshold="5"
					control-planeta="target: pluton"
				>
					<a-entity
						id="pluton-container"
						position="0 0.5 0"
						rotation="270 0 0"
						scale="0.3 0.3 0.3"
						class="planeta"
						visible="false"
						gltf-model="#plutonModel"
					>						
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
