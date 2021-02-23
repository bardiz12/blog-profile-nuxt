<template>
  <div class="prose max-w-screen-lg mx-auto">
    <article class="md:mx-0 mx-5">
      <h1>
        Penerapan Metode FP-Growth dan TF-IDF pada algoritma <i>Naive Bayes</i>
      </h1>
      <div class="pb-3"></div>
      <div class="text-center">
        <NuxtLink :to="`/skripsi`">
          <Button>Kembali</Button>
        </NuxtLink>
      </div>

      <h2>1. Dataset Awal</h2>
      <data-table v-if="raw.datasetAwal !== null" v-bind="datasetAwal" />
      <h2>2. Text Preprocessing</h2>
      <ol start="a" class="ml-10">
        <li>
          <div>
            <h3>Text Cleansing & case Folding</h3>
            <data-table
              v-if="raw.textCleansingAndCaseFolding !== null"
              v-bind="textCleansingAndCaseFolding"
            />
          </div>
        </li>
        <li>
          <div>
            <h3>Delete Stopwords</h3>
            <data-table v-if="raw.stopwords !== null" v-bind="stopwords" />
          </div>
        </li>
        <li>
          <div>
            <h3>Stemming</h3>
            <data-table v-if="raw.stemText !== null" v-bind="stemText" />
          </div>
        </li>
      </ol>

      <h2>3. FP-Growth</h2>
      <ol start="a" class="ml-10">
        <li>
          <div>
            <h3>Data Itemset FP-Growth</h3>
            <data-table
              v-if="raw.fpgrowthItemset !== null"
              v-bind="fpgrowthItemset"
            />
          </div>
        </li>
      </ol>
      <h2>4. Dataset dengan tambahan fitur baru</h2>
      <data-table
        v-if="raw.fpgrowthDataset !== null"
        v-bind="fpgrowthDataset"
      />
      <h2>5. TF-IDF</h2>
      <ol start="a" class="ml-10">
        <li>
          <div>
            <h3>Nilai IDF</h3>
            <data-table v-if="raw.idf !== null" v-bind="idf" />
          </div>
        </li>
      </ol>
    </article>
  </div>
</template>

<script>
import moment from "moment";
import DataTable from "@andresouzaabreu/vue-data-table";
import { getDatasetAwal, getData } from "./../../data/dataProvider";

export default {
  components: {
    DataTable,
  },
  data() {
    return {
      raw: {
        datasetAwal: null,
        textCleansingAndCaseFolding: null,
        stopwords: null,
        stemText: null,
        fpgrowthItemset: null,
        fpgrowthDataset: null,
        idf: null,
      },
    };
  },
  methods: {
    loadAllData: async function () {
      this.raw.datasetAwal = await getData("dataset_ori.csv");

      this.raw.textCleansingAndCaseFolding = await getData(
        "after_cleansing.csv"
      );
      this.raw.stopwords = await getData("percobaan-1/delete_stopwords.csv");
      this.raw.stemText = await getData("percobaan-1/after_stem.csv");
      this.raw.fpgrowthItemset = await getData("percobaan-1/fpgrowthresult.csv");
      this.raw.fpgrowthDataset = await getData("percobaan-1/new_fp_growth_dataset.csv");
      this.raw.idf = await getData("percobaan-1/idf.csv");
    },
  },
  created() {
    this.loadAllData();
  },
  computed: {
    datasetAwal() {
      if (this.raw.datasetAwal === null) return null;
      return {
        data: this.raw.datasetAwal.data,
        actionMode: "multiple",
        columnKeys: this.raw.datasetAwal.header,
      };
    },
    textCleansingAndCaseFolding() {
      return {
        data: this.raw.textCleansingAndCaseFolding.data,
        actionMode: "multiple",
        columnKeys: this.raw.textCleansingAndCaseFolding.header,
      };
    },
    stopwords() {
      return {
        data: this.raw.stopwords.data,
        actionMode: "multiple",
        columnKeys: this.raw.stopwords.header,
      };
    },
    stemText() {
      return {
        data: this.raw.stemText.data,
        actionMode: "multiple",
        columnKeys: this.raw.stemText.header,
      };
    },
    fpgrowthItemset() {
      return {
        data: this.raw.fpgrowthItemset.data,
        actionMode: "multiple",
        columnKeys: this.raw.fpgrowthItemset.header,
      };
    },
    fpgrowthDataset() {
      return {
        data: this.raw.fpgrowthDataset.data,
        actionMode: "multiple",
        columnKeys: this.raw.fpgrowthDataset.header,
      };
    },
    idf() {
      return {
        data: this.raw.idf.data,
        actionMode: "multiple",
        columnKeys: this.raw.idf.header,
      };
    },
  },
  head() {
    return {
      title: "Percobaan 1 - Skripsi | Bardizba Z - Fullstack Web Developer",
    };
  },
};
</script>

<style>
/*! CSS Used from: Embedded */
button,
input,
select {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button {
  -webkit-appearance: button;
}
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring {
  outline: 1px dotted ButtonText;
}
button {
  background-color: transparent;
  background-image: none;
}
button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
*,
::before,
::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
}
input::-moz-placeholder {
  color: #a0aec0;
}
input:-ms-input-placeholder {
  color: #a0aec0;
}
input::placeholder {
  color: #a0aec0;
}
button {
  cursor: pointer;
}
table {
  border-collapse: collapse;
}
button,
input,
select {
  padding: 0;
  line-height: inherit;
  color: inherit;
}
.prose ul > li {
  position: relative;
  padding-left: 1.75em;
}
.prose ul > li::before {
  content: "";
  position: absolute;
  background-color: #e2e8f0;
  border-radius: 50%;
  width: 0.375em;
  height: 0.375em;
  top: calc(0.875em - 0.1875em);
  left: 0.25em;
}
.prose table {
  width: 100%;
  table-layout: auto;
  text-align: left;
  margin-top: 2em;
  margin-bottom: 2em;
  font-size: 0.875em;
  line-height: 1.7142857;
}
.prose thead {
  color: #1a202c;
  font-weight: 600;
  border-bottom-width: 1px;
  border-bottom-color: #e2e8f0;
}
.prose thead th {
  vertical-align: bottom;
  padding-right: 0.5714286em;
  padding-bottom: 0.5714286em;
  padding-left: 0.5714286em;
}
.prose tbody tr {
  border-bottom-width: 1px;
  border-bottom-color: #edf2f7;
}
.prose tbody tr:last-child {
  border-bottom-width: 0;
}
.prose tbody td {
  vertical-align: top;
  padding-top: 0.5714286em;
  padding-right: 0.5714286em;
  padding-bottom: 0.5714286em;
  padding-left: 0.5714286em;
}
.prose ul {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
}
.prose li {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
.prose h2 + * {
  margin-top: 0;
}
.prose thead th:first-child {
  padding-left: 0;
}
.prose thead th:last-child {
  padding-right: 0;
}
.prose tbody td:first-child {
  padding-left: 0;
}
.prose tbody td:last-child {
  padding-right: 0;
}
.table {
  display: table;
}
@media (min-width: 640px) {
  .sm\:prose ul > li {
    position: relative;
    padding-left: 1.75em;
  }
  .sm\:prose ul > li::before {
    content: "";
    position: absolute;
    background-color: #e2e8f0;
    border-radius: 50%;
    width: 0.375em;
    height: 0.375em;
    top: calc(0.875em - 0.1875em);
    left: 0.25em;
  }
  .sm\:prose table {
    width: 100%;
    table-layout: auto;
    text-align: left;
    margin-top: 2em;
    margin-bottom: 2em;
    font-size: 0.875em;
    line-height: 1.7142857;
  }
  .sm\:prose thead {
    color: #1a202c;
    font-weight: 600;
    border-bottom-width: 1px;
    border-bottom-color: #e2e8f0;
  }
  .sm\:prose thead th {
    vertical-align: bottom;
    padding-right: 0.5714286em;
    padding-bottom: 0.5714286em;
    padding-left: 0.5714286em;
  }
  .sm\:prose tbody tr {
    border-bottom-width: 1px;
    border-bottom-color: #edf2f7;
  }
  .sm\:prose tbody tr:last-child {
    border-bottom-width: 0;
  }
  .sm\:prose tbody td {
    vertical-align: top;
    padding-top: 0.5714286em;
    padding-right: 0.5714286em;
    padding-bottom: 0.5714286em;
    padding-left: 0.5714286em;
  }
  .sm\:prose ul {
    margin-top: 1.25em;
    margin-bottom: 1.25em;
  }
  .sm\:prose li {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
  .sm\:prose h2 + * {
    margin-top: 0;
  }
  .sm\:prose thead th:first-child {
    padding-left: 0;
  }
  .sm\:prose thead th:last-child {
    padding-right: 0;
  }
  .sm\:prose tbody td:first-child {
    padding-left: 0;
  }
  .sm\:prose tbody td:last-child {
    padding-right: 0;
  }
}
* {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-duration: 100ms;
}
/*! CSS Used from: Embedded */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
/*! CSS Used from: Embedded */
*,
::after,
::before {
  box-sizing: border-box;
}
ul {
  margin-top: 0;
  margin-bottom: 1rem;
}
table {
  border-collapse: collapse;
}
th {
  text-align: inherit;
  text-align: -webkit-match-parent;
}
button {
  border-radius: 0;
}
button:focus:not(.focus-visible) {
  outline: 0;
}
button:focus:not(:focus-visible) {
  outline: 0;
}
button,
input,
select {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
select {
  word-wrap: normal;
}
button {
  -webkit-appearance: button;
}
button::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
}
.table td,
.table th {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}
.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}
.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
.table-hover tbody tr:hover {
  color: #212529;
  background-color: rgba(0, 0, 0, 0.075);
}
.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}
.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}
.form-control:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #495057;
}
.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
.form-control::-moz-placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control:-ms-input-placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control::placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control:disabled {
  background-color: #e9ecef;
  opacity: 1;
}
.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:hover {
  color: #212529;
  text-decoration: none;
}
.btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
.btn:disabled {
  opacity: 0.65;
}
.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
.btn-primary:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
}
.btn-primary:focus {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
}
.btn-primary:disabled {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;
}
.page-link {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #007bff;
  background-color: #fff;
  border: 1px solid #dee2e6;
}
.page-link:hover {
  z-index: 2;
  color: #0056b3;
  text-decoration: none;
  background-color: #e9ecef;
  border-color: #dee2e6;
}
.page-link:focus {
  z-index: 3;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
.page-item:first-child .page-link {
  margin-left: 0;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.page-item:last-child .page-link {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  cursor: auto;
  background-color: #fff;
  border-color: #dee2e6;
}
@media print {
  *,
  ::after,
  ::before {
    text-shadow: none !important;
    box-shadow: none !important;
  }
  thead {
    display: table-header-group;
  }
  tr {
    page-break-inside: avoid;
  }
  .table {
    border-collapse: collapse !important;
  }
  .table td,
  .table th {
    background-color: #fff !important;
  }
}
.data-table-info {
  grid-area: info;
}
.data-table-per-page {
  display: flex;
  align-items: center;
  grid-area: perPage;
}
.data-table-per-page select {
  margin: 0 5px;
  height: auto !important;
  padding: 0.25rem 0.5rem 0.25rem 0.25rem;
  line-height: 1;
  color: #495057;
  background: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  display: inline-block;
}
.data-table-export-data {
  display: flex;
  align-items: center;
  padding-left: 4px;
  grid-area: download;
}
.data-table-export-data select {
  margin: 0 6px;
  max-width: 70px;
}
.data-table-export-data span {
  white-space: nowrap;
}
.data-table-pagination {
  margin-left: auto;
  grid-area: pagination;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}
.data-table-pagination > :first-child {
  margin-right: 10px;
}
.data-table-pagination > * {
  margin-bottom: 10px !important;
}
.data-table-pagination .pagination {
  margin: 0;
  padding: 0;
  overflow: auto;
}
.data-table-pagination .pagination-search {
  display: flex;
  align-items: center;
  white-space: nowrap;
}
.data-table-pagination .pagination-search * {
  margin-right: 5px;
}
.data-table-pagination .pagination-search input {
  width: 70px;
}
.data-table-pagination .page-item {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.data-table-pagination .page-link {
  cursor: pointer;
}
.data-table-search-filter {
  grid-area: search;
  display: flex;
  align-items: center;
}
.data-table-search-filter input {
  margin: 0;
  color: #495057;
  outline: none;
  background-color: #fff;
  border: 1px solid #ced4da;
  padding: 0.25rem 0.5rem;
  line-height: 1.5;
  border-radius: 6px;
  margin-left: 0.5em;
  display: inline-block;
}
.data-table-table {
  overflow: auto;
  max-height: 80vh;
  width: 100%;
  grid-area: table;
}
.data-table-table table {
  margin: 0;
}
.data-table-table .column {
  white-space: nowrap;
  background-color: #fff;
  position: -webkit-sticky;
  position: sticky;
  padding: 1rem 0.75rem;
  border: none !important;
  box-shadow: inset 0 11px 0.75px -10px #ddd, inset 0 -11px 0.75px -10px #ddd;
  line-height: 1;
  top: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.data-table-table .column.sortable {
  cursor: pointer;
}
.data-table-table .column.sortable:hover {
  color: #3490dc;
}
.data-table-table .column-content {
  display: flex;
  align-items: center;
}
.data-table-sorting-icons {
  display: flex;
  margin-left: auto;
  padding-left: 0.3em;
}
.data-table-sorting-icons .icon {
  width: 0.75em;
  display: block;
  height: 1em;
}
.data-table-sorting-icons .icon.asc:after {
  content: "\2193";
}
.data-table-sorting-icons .icon.desc:after {
  content: "\2191";
}
.data-table-sorting-icons .icon.asc:after,
.data-table-sorting-icons .icon.desc:after {
  font-size: 120%;
  line-height: 1;
  display: block;
  color: #000;
  opacity: 0.5;
}
.data-table {
  display: grid;
  width: 100%;
  grid-template-columns: 25% 25% 25% 25%;
}
.data-table .data-table-export-data,
.data-table .data-table-pagination,
.data-table > .data-table-search-filter {
  margin-left: auto;
}
@media (min-width: 1401px) {
  .data-table {
    grid-template-areas: "perPage search search search" "table table table table" "info pagination pagination download";
  }
}
@media (min-width: 1051px) and (max-width: 1400px) {
  .data-table {
    grid-template-areas: "perPage search search search" "table table table table" "info pagination pagination pagination" ". . download download";
  }
}
@media (min-width: 851px) and (max-width: 1050px) {
  .data-table {
    grid-template-areas: "perPage search search search" "table table table table" "pagination pagination pagination pagination" "info info download download";
  }
}
@media (max-width: 800px) {
  .data-table > .data-table-pagination {
    flex-wrap: wrap;
  }
}
@media (min-width: 651px) and (max-width: 850px) {
  .data-table {
    grid-template-areas: "perPage search search search" "table table table table" "pagination pagination pagination pagination" "info info info info" "download download download download";
  }
}
@media (max-width: 650px) {
  .data-table {
    grid-template-areas: "search search search search" "perPage perPage perPage perPage " "table table table table" "pagination pagination pagination pagination" "info info info info" "download download download download";
  }
  .data-table > .data-table-per-page {
    margin-left: auto;
  }
}
.data-table > div {
  margin-top: 1rem;
  max-width: 100%;
}
ul.pagination {
  display: none;
}
</style>