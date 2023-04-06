import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { CustomButton } from "../components";
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from "../config/motion";

const Home = () => {
    const snap = useSnapshot(state)

    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className="home" {...slideAnimation('left')}>
                    <motion.header {...slideAnimation("down")}>
                        <img src="./threejs.png" alt="logo" className="w-8 h-8 object-contain" />
                    </motion.header>
                    <motion.section className="home-content" {...headContainerAnimation}>
                        <motion.section {...headTextAnimation}>
                            <h1 className="head-text">
                                LET'S <br className="xl:block hidden" /> DO IT.
                            </h1>
                        </motion.section>
                        <motion.section className="flex flex-col gap-5" {...headContentAnimation}>
                            <p className="max-w-md font-normal text-gray-600 text-base">
                                Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>
                                and define your own style.
                            </p>
                            <CustomButton type="filled"
                                title="Customize It"
                                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                                onClick={() => state.intro = false}
                            />
                        </motion.section>
                    </motion.section>
                </motion.section>
            )}
        </AnimatePresence>
    );
};

export default Home;
