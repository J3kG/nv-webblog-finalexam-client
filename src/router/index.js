import Vue from 'vue'
import Router from 'vue-router'
import UserIndex from '@/components/Courses/Index'
import UserEdit from '@/components/Courses/Update'
import UserShow from '@/components/Courses/ShowUser'
import UserCreate from '@/components/Courses/Create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/course/create',
      name: 'course-create',
      component: UserCreate
    },
    {
      path: '/course/edit/:courseId',
      name: 'course-edit',
      component: UserEdit
    },
    {
      path: '/course/:courseId',
      name: 'course',
      component: UserShow
    },
    {
      path: '/courses',
      name: 'courses',
      component: UserIndex
    },

    

  ]
})
