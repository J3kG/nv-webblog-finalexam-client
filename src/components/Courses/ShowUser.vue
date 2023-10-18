<template>
  <div>
    <h1>Show Course</h1>
    <p>id: {{ course.id }}</p>
    <p>title: {{ course.title }}</p>
    <p>instructor: {{ course.instructor }}</p>
    <p>description: {{ course.description }}</p>
    <div>total_student: {{ course.total_student }}</div>
    <div>status: {{ course.status }}</div>
    <div>type: {{ course.type }}</div>
  </div>
</template>
<script>
import UserService from "@/services/UserService";

export default {
  data() {
    return {
      course: null
    };
  },
  async created() {
    let courseId = this.$route.params.courseId;
    this.course = (await UserService.show(courseId)).data
    console.log(this.courseId)
  }
};
</script>
<style scoped></style>
