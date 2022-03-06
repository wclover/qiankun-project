<template>
  <section class="content-body">
    <el-table
      :data="tableData"
      border
      :span-method="objectSpanMethod"
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column
        prop="province"
        label="Département"
        width="180"
      />
      <el-table-column
        prop="province"
        label="Palette"
      >
        <template slot-scope="{row}">
          <pallet-board v-for="pallet in row.pallets" :key="pallet.id" :pallet="pallet" :checked.sync="pallet.checked" @changeStatus="changeStatus" />
        </template>
      </el-table-column>
      <el-table-column
        prop="province"
        label="Qte CC/CTN/PAL"
      >
        <template slot-scope="{row}">
          {{ `${row.declaredQuantity} CC, ${row.declaredBoxQuantity} CTN, ${row.pallets.length} PAL` }}
        </template>
      </el-table-column>
      <el-table-column
        prop="province"
        label="Planifier"
      >
        <template slot-scope="{row}">
          <el-button @click="addVolume(row)"><i class="el-icon-right" /></el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="deliveryConfigs.distributorName"
        label="SST"
      />
      <el-table-column
        label="capacité"
      >
        <template slot-scope="{row}">
          {{ `${row.deliveryConfigs.volume || 0} / ${row.deliveryConfigs.deliveryVolume || 0}` }}
        </template>
      </el-table-column>
      <el-table-column
        prop="province"
        label="opération"
      />
      <el-table-column
        prop="province"
        label="Anomalie"
      />
    </el-table>

  </section>
</template>

<script>
import PalletBoard from '@/components/PalletBoard'
import _ from 'lodash'
export default {
  name: 'MergeTable',
  components: {
    PalletBoard
  },
  data() {
    return {
      tableData: [
        {
          province: '25',
          pallets: [
            {
              createdBy: 'huangyichen',
              createdAt: '2021-01-06T03:34:19.436Z',
              updatedBy: null,
              updatedAt: null,
              id: 55,
              code: '20210106P003',
              labelUrl: 'https://s3-colicoli.ftl-oms.com/development/label/20210106P003.pdf',
              declaredBoxQuantity: 12.00,
              declaredQuantity: 14.00,
              weight: 3.000,
              province: '25',
              status: 'PREPARED',
              distributorId: null,
              assignedAt: null
            }, {
              createdBy: 'huangyichen',
              createdAt: '2021-01-06T03:34:19.436Z',
              updatedBy: null,
              updatedAt: null,
              id: 551,
              code: '20210106P0033',
              labelUrl: 'https://s3-colicoli.ftl-oms.com/development/label/20210106P003.pdf',
              declaredBoxQuantity: 12.00,
              declaredQuantity: 14.00,
              weight: 3.000,
              province: '25',
              status: 'PREPARED',
              distributorId: null,
              assignedAt: null
            }
          ],
          deliveryConfigs: [
            {
              createdBy: null,
              createdAt: null,
              updatedBy: null,
              updatedAt: null,
              id: 10010,
              distributorId: 5,
              distributorName: '菜鸟',
              province: '25',
              deliveryVolume: 10,
              volume: null
            },
            {
              createdBy: null,
              createdAt: null,
              updatedBy: null,
              updatedAt: null,
              id: 101010,
              distributorId: 5,
              distributorName: '菜鸟',
              province: '25',
              deliveryVolume: 10,
              volume: null
            },
            {
              createdBy: null,
              createdAt: null,
              updatedBy: null,
              updatedAt: null,
              id: 10005,
              distributorId: 4,
              distributorName: '顺丰',
              province: '25',
              deliveryVolume: 10,
              volume: 16.00
            }
          ]
        },
        {
          province: '14',
          pallets: [
            {
              createdBy: 'cc_admin',
              createdAt: '2021-01-06T01:56:05.628Z',
              updatedBy: null,
              updatedAt: null,
              id: 53,
              code: '20210106P001',
              labelUrl: 'https://s3-colicoli.ftl-oms.com/development/label/20210106P001.pdf',
              declaredBoxQuantity: 31.00,
              declaredQuantity: 21.00,
              weight: 3.000,
              province: '14',
              status: 'PREPARED',
              distributorId: null,
              assignedAt: null
            }
          ],
          deliveryConfigs: [
            {
              createdBy: null,
              createdAt: null,
              updatedBy: null,
              updatedAt: null,
              id: 10011,
              distributorId: 5,
              distributorName: '菜鸟',
              province: '14',
              deliveryVolume: 10,
              volume: null
            },
            {
              createdBy: null,
              createdAt: null,
              updatedBy: null,
              updatedAt: null,
              id: 10006,
              distributorId: 4,
              distributorName: '顺丰',
              province: '14',
              deliveryVolume: 10,
              volume: 16.00
            }
          ]
        },
        {
          province: '26',
          pallets: [
            {
              createdBy: 'huangyichen',
              createdAt: '2021-01-05T02:38:49.511Z',
              updatedBy: null,
              updatedAt: null,
              id: 51,
              code: '20210105P002',
              labelUrl: 'https://s3-colicoli.ftl-oms.com/development/label/20210105P002.pdf',
              declaredBoxQuantity: 1.00,
              declaredQuantity: 1.00,
              weight: 3.000,
              province: '26',
              status: 'PREPARED',
              distributorId: null,
              assignedAt: null
            }
          ],
          deliveryConfigs: [
            {
              createdBy: null,
              createdAt: null,
              updatedBy: null,
              updatedAt: null,
              id: 10015,
              distributorId: 5,
              distributorName: '菜鸟',
              province: '26',
              deliveryVolume: 10,
              volume: null
            }
          ]
        },
        {
          province: '18',
          pallets: [
            {
              createdBy: 'huangyichen',
              createdAt: '2021-01-04T10:14:49.634Z',
              updatedBy: null,
              updatedAt: null,
              id: 48,
              code: '20210104P029',
              labelUrl: 'https://s3-colicoli.ftl-oms.com/development/label/20210104P029.pdf',
              declaredBoxQuantity: 1.00,
              declaredQuantity: 1.00,
              weight: 3.000,
              province: '18',
              status: 'PREPARED',
              distributorId: null,
              assignedAt: null
            }
          ],
          deliveryConfigs: [
            {
              createdBy: null,
              createdAt: null,
              updatedBy: null,
              updatedAt: null,
              id: 10014,
              distributorId: 5,
              distributorName: '菜鸟',
              province: '18',
              deliveryVolume: 10,
              volume: null
            },
            {
              createdBy: null,
              createdAt: null,
              updatedBy: null,
              updatedAt: null,
              id: 10009,
              distributorId: 4,
              distributorName: '顺丰',
              province: '18',
              deliveryVolume: 10,
              volume: 16.00
            }
          ]
        },
        {
          province: '19',
          pallets: [
            {
              createdBy: 'huangyichen',
              createdAt: '2021-01-04T09:22:49.520Z',
              updatedBy: null,
              updatedAt: null,
              id: 47,
              code: '20210104P028',
              labelUrl: 'https://s3-colicoli.ftl-oms.com/development/label/20210104P028.pdf',
              declaredBoxQuantity: 1.00,
              declaredQuantity: 1.00,
              weight: 3.000,
              province: '19',
              status: 'PREPARED',
              distributorId: null,
              assignedAt: null
            },
            {
              createdBy: 'cc_admin',
              createdAt: '2021-01-06T01:59:08.314Z',
              updatedBy: null,
              updatedAt: null,
              id: 54,
              code: '20210106P002',
              labelUrl: 'https://s3-colicoli.ftl-oms.com/development/label/20210106P002.pdf',
              declaredBoxQuantity: 1.00,
              declaredQuantity: 1.00,
              weight: 3.000,
              province: '19',
              status: 'PREPARED',
              distributorId: null,
              assignedAt: null
            }
          ],
          deliveryConfigs: [
            {
              createdBy: null,
              createdAt: null,
              updatedBy: null,
              updatedAt: null,
              id: 10003,
              distributorId: 4,
              distributorName: '顺丰',
              province: '19',
              deliveryVolume: 10,
              volume: 16.00
            }
          ]
        },
        {
          province: '93',
          pallets: [
            {
              createdBy: 'huangyichen',
              createdAt: '2021-01-04T07:22:00.380Z',
              updatedBy: null,
              updatedAt: null,
              id: 24,
              code: '20210104P017',
              labelUrl: 'https://s3-colicoli.ftl-oms.com/development/label/20210104P017.pdf',
              declaredBoxQuantity: 1.00,
              declaredQuantity: 14.00,
              weight: 17.114,
              province: '93',
              status: 'PREPARED',
              distributorId: null,
              assignedAt: null
            },
            {
              createdBy: 'huangyichen',
              createdAt: '2021-01-04T07:22:02.394Z',
              updatedBy: null,
              updatedAt: null,
              id: 25,
              code: '20210104P018',
              labelUrl: 'https://s3-colicoli.ftl-oms.com/development/label/20210104P018.pdf',
              declaredBoxQuantity: 1.00,
              declaredQuantity: 14.00,
              weight: 17.114,
              province: '93',
              status: 'PREPARED',
              distributorId: null,
              assignedAt: null
            },
            {
              createdBy: 'huangyichen',
              createdAt: '2021-01-04T07:22:05.200Z',
              updatedBy: null,
              updatedAt: null,
              id: 26,
              code: '20210104P019',
              labelUrl: 'https://s3-colicoli.ftl-oms.com/development/label/20210104P019.pdf',
              declaredBoxQuantity: 1.00,
              declaredQuantity: 14.00,
              weight: 17.114,
              province: '93',
              status: 'PREPARED',
              distributorId: null,
              assignedAt: null
            },
            {
              createdBy: 'huangyichen',
              createdAt: '2021-01-04T07:26:35.699Z',
              updatedBy: null,
              updatedAt: null,
              id: 30,
              code: '20210104P020',
              labelUrl: 'https://s3-colicoli.ftl-oms.com/development/label/20210104P020.pdf',
              declaredBoxQuantity: 1.00,
              declaredQuantity: 16.00,
              weight: 16.638,
              province: '93',
              status: 'PREPARED',
              distributorId: null,
              assignedAt: null
            },
            {
              createdBy: 'huangyichen',
              createdAt: '2021-01-04T07:52:18.004Z',
              updatedBy: null,
              updatedAt: null,
              id: 34,
              code: '20210104P021',
              labelUrl: 'https://s3-colicoli.ftl-oms.com/development/label/20210104P021.pdf',
              declaredBoxQuantity: 1.00,
              declaredQuantity: 16.00,
              weight: 16.638,
              province: '93',
              status: 'PREPARED',
              distributorId: null,
              assignedAt: null
            },
            {
              createdBy: 'huangyichen',
              createdAt: '2021-01-04T07:54:25.948Z',
              updatedBy: null,
              updatedAt: null,
              id: 35,
              code: '20210104P022',
              labelUrl: 'https://s3-colicoli.ftl-oms.com/development/label/20210104P022.pdf',
              declaredBoxQuantity: 1.00,
              declaredQuantity: 19.00,
              weight: 18.323,
              province: '93',
              status: 'PREPARED',
              distributorId: null,
              assignedAt: null
            },
            {
              createdBy: 'huangyichen',
              createdAt: '2021-01-04T07:56:41.718Z',
              updatedBy: null,
              updatedAt: null,
              id: 37,
              code: '20210104P023',
              labelUrl: 'https://s3-colicoli.ftl-oms.com/development/label/20210104P023.pdf',
              declaredBoxQuantity: 1.00,
              declaredQuantity: 13.00,
              weight: 17.961,
              province: '93',
              status: 'PREPARED',
              distributorId: null,
              assignedAt: null
            },
            {
              createdBy: 'huangyichen',
              createdAt: '2021-01-04T08:08:28.981Z',
              updatedBy: null,
              updatedAt: null,
              id: 39,
              code: '20210104P024',
              labelUrl: 'https://s3-colicoli.ftl-oms.com/development/label/20210104P024.pdf',
              declaredBoxQuantity: 1.00,
              declaredQuantity: 13.00,
              weight: 14.792,
              province: '93',
              status: 'PREPARED',
              distributorId: null,
              assignedAt: null
            },
            {
              createdBy: 'huangyichen',
              createdAt: '2021-01-04T08:21:21.869Z',
              updatedBy: null,
              updatedAt: null,
              id: 40,
              code: '20210104P025',
              labelUrl: 'https://s3-colicoli.ftl-oms.com/development/label/20210104P025.pdf',
              declaredBoxQuantity: 1.00,
              declaredQuantity: 16.00,
              weight: 18.413,
              province: '93',
              status: 'PREPARED',
              distributorId: null,
              assignedAt: null
            },
            {
              createdBy: 'huangyichen',
              createdAt: '2021-01-04T08:23:43.746Z',
              updatedBy: null,
              updatedAt: null,
              id: 41,
              code: '20210104P026',
              labelUrl: 'https://s3-colicoli.ftl-oms.com/development/label/20210104P026.pdf',
              declaredBoxQuantity: 1.00,
              declaredQuantity: 19.00,
              weight: 18.267,
              province: '93',
              status: 'PREPARED',
              distributorId: null,
              assignedAt: null
            },
            {
              createdBy: 'cc_admin',
              createdAt: '2021-01-04T10:32:44.847Z',
              updatedBy: null,
              updatedAt: null,
              id: 49,
              code: '20210104P030',
              labelUrl: 'https://s3-colicoli.ftl-oms.com/development/label/20210104P030.pdf',
              declaredBoxQuantity: 1.00,
              declaredQuantity: 16.00,
              weight: 16.638,
              province: '93',
              status: 'PREPARED',
              distributorId: null,
              assignedAt: null
            }
          ],
          deliveryConfigs: [
            {
              createdBy: null,
              createdAt: null,
              updatedBy: null,
              updatedAt: null,
              id: 10001,
              distributorId: 4,
              distributorName: '顺丰',
              province: '93',
              deliveryVolume: 10,
              volume: 16.00
            }
          ]
        },
        {
          province: '30',
          pallets: [
            {
              createdBy: 'huangyichen',
              createdAt: '2021-01-04T08:43:08.826Z',
              updatedBy: null,
              updatedAt: null,
              id: 45,
              code: '20210104P027',
              labelUrl: 'https://s3-colicoli.ftl-oms.com/development/label/20210104P027.pdf',
              declaredBoxQuantity: 1.00,
              declaredQuantity: 1.00,
              weight: 3.000,
              province: '30',
              status: 'PREPARED',
              distributorId: null,
              assignedAt: null
            }
          ],
          deliveryConfigs: [
            {
              createdBy: null,
              createdAt: null,
              updatedBy: null,
              updatedAt: null,
              id: 10000,
              distributorId: 4,
              distributorName: '顺丰',
              province: '30',
              deliveryVolume: 10,
              volume: 16.00
            }
          ]
        },
        {
          province: '20',
          pallets: [
            {
              createdBy: 'huangyichen',
              createdAt: '2021-01-05T02:33:48.279Z',
              updatedBy: null,
              updatedAt: null,
              id: 50,
              code: '20210105P001',
              labelUrl: 'https://s3-colicoli.ftl-oms.com/development/label/20210105P001.pdf',
              declaredBoxQuantity: 1.00,
              declaredQuantity: 1.00,
              weight: 3.000,
              province: '20',
              status: 'PREPARED',
              distributorId: null,
              assignedAt: null
            }
          ],
          deliveryConfigs: [
            {
              createdBy: null,
              createdAt: null,
              updatedBy: null,
              updatedAt: null,
              id: 10016,
              distributorId: 4,
              distributorName: '顺丰',
              province: '20',
              deliveryVolume: 10,
              volume: 16.00
            }
          ]
        }
      ],
      rowspan: []
    }
  },
  mounted() {
    this.convertTableData()
  },
  methods: {
    objectSpanMethod({ rowIndex, columnIndex }) {
      if ([0, 1, 2].includes(columnIndex)) {
        const row = this.rowspan[rowIndex]
        const col = row > 0 ? 1 : 0
        return {
          rowspan: row,
          colspan: col
        }
      }
    },
    convertTableData() {
      const arr = []
      const rowspan = []
      this.tableData.forEach(item => {
        for (let i = 0; i < item.deliveryConfigs.length; i++) {
          item.deliveryConfigs[i].initValue = item.deliveryConfigs[i].volume || 0
          const newItem = {
            ...item,
            ...item.deliveryConfigs[i]
          }
          newItem.combineNum = item.deliveryConfigs.length
          newItem.deliveryConfigs = item.deliveryConfigs[i]
          arr.push(newItem)
          if (i === 0) {
            rowspan.push(item.deliveryConfigs.length)
          } else {
            rowspan.push(0)
          }
        }
      })
      this.tableData = arr
      this.tableData = this.tableData.map(item => {
        item.declaredQuantity = _.sumBy(item.pallets, i => { return i.declaredQuantity })
        item.declaredBoxQuantity = _.sumBy(item.pallets, i => { return i.declaredBoxQuantity })
        item.pallets = item.pallets.map(pallet => {
          pallet.checked = false
          return pallet
        })
        return item
      })
      console.log(this.tableData)
      this.rowspan = rowspan
    },
    changeStatus() {
      this.getCheckedId()
    },
    getCheckedId() {
      const set = new Set()
      for (const i of this.tableData) {
        for (const j of i.pallets) {
          if (j.checked) {
            set.add(j.id)
          }
        }
      }
      console.log([...set])
    },
    addVolume(row) {
      let volumeNum = row.deliveryConfigs.initValue
      row.pallets.forEach(pallet => {
        pallet.checked && (volumeNum += pallet.declaredBoxQuantity)
      })
      row.deliveryConfigs.volume = volumeNum
      const index = _.findIndex(this.tableData, { province: row.province })
      this.tableData.splice(index, 1, row)
    },
    cancelAdd(row) {
      row.deliveryConfigs.volume = row.deliveryConfigs.initValue
      row.pallets.map(pallet => {
        pallet.checked = false
      })
      const index = _.findIndex(this.tableData, { province: row.province })
      this.tableData.splice(index, 1, row)
    }
  }
}
</script>

<style scoped>

</style>
