<template>
  <div class="card">
    <div class="card-header font-20 bg-dark text-white">Danh sách đơn hàng</div>
    <div class="card-body font-16">
      <table class="table table-bordered text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Thời gian đặt</th>
            <th>Thông tin người nhận</th>
            <th>Thông tin người đặt</th>
            <th>Trạng thái</th>
            <th>Tổng tiền</th>
            <th>Xem</th>
            <th>Sửa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td>
              <br />
              <br />
              <br />
            </td>
            <td>
              <br />
              <br />
              <br />
            </td>
            <td>
            </td>
            <td></td>
            <td>
              <!-- /admin/home/view-order -->
              <router-link to="/admin/home/view-order">
                Xem chi tiết
              </router-link>
            </td>
            <td>
              <a href="?controller=orders&action=update&id=&status=1">
                Duyệt
              </a>
              <a
                href="?controller=orders&action=update&id=&status=2"
                class="ml-3"
              >
                Hủy
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>