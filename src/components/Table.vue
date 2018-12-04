<template>
  <div class="epic-table custom-scrollbar">
    <div class="table-head">
      <table class="table">
        <thead>
          <th>User</th>
          <th>Name/Email</th>
          <th>Gender</th>
          <th>Created</th>
          <th>Created</th>
          <th>Created</th>
          <th>Role</th>
        </thead>
      </table>
    </div>
    <div class="table-body">
      <table id="user" class="table">
        <tbody>
          <tr v-for="(user, index) in users" :key="user.user" v-if="index < 100">
            <td>{{ user.user }}</td>
            <td>
              <div class="user-info">
                <p>{{ user.firstName }} {{ user.lastName }}</p>
                <p class="user-email">{{ user.email }}</p>
              </div>
            </td>
            <td>{{ user.gender === "M" ? "Male" : "Female" }}</td>
            <td>{{ (new Date(parseInt(user.createDate))).toUTCString() }}</td>
            <td>{{ (new Date(parseInt(user.createDate))).toUTCString() }}</td>
            <td>{{ (new Date(parseInt(user.createDate))).toUTCString() }}</td>
            <td>{{ user.role }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableComponent',
  props: {},
  data() {
    return {
      users: [],
    };
  },
  methods: {
    fetchUsers() {
      const self = this;
      self.$http
        .get('https://api.myjson.com/bins/jlp7a')
        .then((response) => {
          self.users = response.data;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .then(() => {
          // always executed
        });
    },
    resizeTableHeader() {
      const tables = document.getElementsByClassName('epic-table');
      _.forEach(tables, (table) => {
        const ths = table.querySelectorAll('.table-head thead th');
        const row0 = table.querySelector('.table-body tbody tr');
        const tds = row0.querySelectorAll('td');
        _.forEach(tds, (td, index) => {
          ths[index].style.width = `${td.offsetWidth}px`;
        });
      });
    },
  },
  mounted() {
    this.fetchUsers();
  },
  updated() {
    this.$nextTick(function() {
      this.resizeTableHeader();
    });
  },
};
</script>

<style lang="scss">
.custom-scrollbar {
  &::-webkit-scrollbar {
    width: 8px;
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 6px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #555555;
  }
}
</style>