// Créez une scène
const scene = new THREE.Scene();

// Créez une caméra
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Créez un rendu WebGL
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

// Chargez le modèle 3D GLTF
const loader = new THREE.GLTFLoader();
loader.load('chemin_vers_votre_modele.gltf', (gltf) => {
    const model = gltf.scene;
    scene.add(model);
});

// Animation (facultatif)
const animate = () => {
    requestAnimationFrame(animate);
    // Ajoutez ici votre logique d'animation si nécessaire
    renderer.render(scene, camera);
};
animate();
