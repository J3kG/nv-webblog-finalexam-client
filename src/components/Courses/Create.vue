<template>
  <div>
    <h1>Create Courses</h1>
    <form v-on:submit.prevent="createUser">
      <p>title: <input type="text" v-model="course.title" /></p>
      <p>instructor: <input type="text" v-model="course.instructor" /></p>
      <p>description: <input type="text" v-model="course.description" /></p>
      <p>total_student: <input type="text" v-model="course.total_student" /></p>
      <p>type: <input type="text" v-model="course.type" /></p>
      <p><button type="submit">create course</button></p>
    </form>
    <hr />
    <div>
      <p>title: {{ course.title }}</p>
      <p>instructor: {{ course.instructor }}</p>
      <p>description: {{ course.description }}</p>
      <p>total_student: {{ course.total_student }}</p>
      <p>type: {{ course.type }}</p>
    </div>
  </div>
</template>
<script>
import UsersService from "@/services/UserService";

export default {
  data() {
    return {
      course: {
        title: "",
        instructor: "",
        description: "",
        total_student: "",
        status: "active",
        type: ""
      }
    };
  },
  methods: {
    async createUser() {
      try {
        await UsersService.post(this.course);
        this.$router.push({
          name: "courses"
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style scoped></style>
