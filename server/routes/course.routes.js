import {Router} from "express"
  import {   createCourse, getAllCourses, getLecturesByCourseId, removeCourse, updateCourse ,addLectureToCourseById, removeLectureFromCourse} from "../controllers/course.controllers.js";
import { authorizeRoles, authorizeSubscriber, isLoggedIn } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js"

const router = Router();

router.get("/",getAllCourses);



router.get("/:id",  isLoggedIn,authorizeSubscriber, getLecturesByCourseId)


router.post("/", isLoggedIn,  authorizeRoles("ADMIN"),  upload.single("thumbnail"),createCourse)
router.put("/:id",isLoggedIn, authorizeRoles("ADMIN"), updateCourse)
router.delete("/:id", isLoggedIn,authorizeRoles("ADMIN"),  removeCourse)
router.post( "/:id", isLoggedIn,authorizeRoles("ADMIN") ,upload.single("lecture"),  addLectureToCourseById)
router.delete("/",  isLoggedIn,   authorizeRoles("ADMIN"),  removeLectureFromCourse);


export default router;