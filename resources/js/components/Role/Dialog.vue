<template>
	<v-dialog v-model="active" max-width="400px" persistent>

		<v-card>
			<v-card-title>
				<span class="headline">{{ formTitle }}</span>
			</v-card-title>

			<ValidationObserver tag="form" v-slot="{ passes }" ref="obs">
				<v-card-text>
					<v-container>
						<v-row>
							<v-col cols="12">
								<ValidationProvider name="Nombre" rules="required" v-slot="{ errors }">
									<v-text-field
										v-model="editedItem.name"
										label="Nombre"
										:error-messages="errors">
									</v-text-field>
								</ValidationProvider>
							</v-col>
							<v-col cols="12">
								<ValidationProvider name="Descripción" rules="required" v-slot="{ errors }">
									<v-text-field
										v-model="editedItem.description"
										label="Descripción"
										:error-messages="errors">
									</v-text-field>
								</ValidationProvider>
							</v-col>
							<v-col cols="12">
								<ValidationProvider name="Role" rules="required" v-slot="{ errors }">
									<v-select
									  v-model="editedItem.permission"
									  :items="ItemsPermission"
									  item-text="name"
									  item-value="id"
									  label="Permisos"
									  multiple
									  chips
									></v-select>
								</ValidationProvider>
							</v-col>                              
						</v-row>
					</v-container>
				</v-card-text>
				<v-card-actions>
				  	<v-btn
						color="primary"
						@click="passes(save)">
						Guardar
				  	</v-btn>

				  <v-btn text @click="close">Cancelar</v-btn>
				</v-card-actions>
			</ValidationObserver>


		</v-card>
	</v-dialog>
</template>
<script>
	import Swal from 'sweetalert2';

	export default {
		props: ["active", "editedItem", "edit"],

		data: () => ({
			snackbar: false,
			text: '',
			loading: false,
			menu1: false,
			menu2: false,
			e1: 1,
			position_array: '',
			id_user: 0,
			itemsPerPage: 10,
			desserts: [],
			editedIndex: -1,
			password: '',
			files: [],
			confirm_password: '',
			defaultItem: {
				name: '',
				email: '',
				rol: '',
				// permission: []
			},
		}),

		computed: {
			formTitle() {
				return this.edit === false ? 'Nuevo Role' : 'Editar Role'
			},
			ItemsPermission() {
				return this.$store.getters["permission/GET_PERMISSION"];
			},
			// status: {
			//     get () {
			//         return (this.editedItem.status === 1) ? true : false
			//     },
			//     set (val) {
			//         this.editedItem.status = val
			//     }
			// }
		},

		watch: {
			dialog(val) {
				val || this.close()
			},
		},

		created() {
			// this.initialize();
			//this.ruc_type();
		},

		methods: {

			async save1() {
				this.e1 = 2
			},

			close() {
				this.$emit("dialog:change", "cerrar");
			},


			async save() {
				//   editar
				if (this.edit === true) {
					//   Object.assign(this.desserts[this.editedIndex], this.editedItem)
					const request = {
						id: this.editedItem.id,
						name: this.editedItem.name,
						slug: this.editedItem.name,
						description: this.editedItem.description,
						permission: this.editedItem.permission,
						position_array: this.editedItem.position_array
					}
					try {
						const response = await this.$store.dispatch("role/UPDATED", request);

						this.$refs.obs.reset();

						this.$emit("dialog:change", "editar");


						// this.close()
					} catch (error) {
						console.log(error);
					}
				} else {
					// guardar
					try {
						this.editedItem.permission.push(1);

						const request = {
							name: this.editedItem.name,
							slug: this.editedItem.name,
							description: this.editedItem.description,
							permission: this.editedItem.permission,
						}

						const response = await this.$store.dispatch("role/REGISTER", request);

						this.$refs.obs.reset();

						this.$emit("dialog:change", "registro");

						// Swal.fire({
						//   icon: 'success',
						//   title: 'Empresa creada con exito',
						// })
						// this.close()
					} catch (error) {

						let e = error.response.data.message;
						let list = "";

						for (const prop in e) {
						  list = list + `<li>${e[prop][0]}</li>`;
						}

						Swal.fire({
						  icon: "error",
						  title: "Oops...",
						  html: list
						});
					}
					// this.close()
				}
			},
		},
	}
</script>
