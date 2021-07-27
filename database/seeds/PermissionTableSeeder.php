<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use App\Models\Permission;
use App\Models\Role;
use App\User;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	//truncate table
    	DB::statement("SET foreign_key_checks=0");
	        DB::table('role_user')->truncate();
	        DB::table('permission_role')->truncate();
	        Permission::truncate();
	        Role::truncate();
    	DB::statement("SET foreign_key_checks=1");

    	/*UserAdmin*/
        //||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
        $useradmin = User::where('email','admin@email.com')->first();

        if($useradmin){$useradmin->delete();}

        $useradmin = User::create([
	        'name' => 'admin',
	        'email' => 'admin@email.com',
            'email_verified_at' => now(),
	        'password' => Hash::make('123456')
        ]);


        /*UserRoot*/
        //||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
        $userroot = User::where('email','root@email.com')->first();

        if($userroot){$userroot->delete();}

        $userroot = User::create([
	        'name' => 'root',
	        'email' => 'root@email.com',
            'email_verified_at' => now(),
	        'password' => Hash::make('secret')
        ]);


         /*User*/
        //||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
        $user = User::where('email','user@email.com')->first();

        if($user){$user->delete();}

        $user = User::create([
            'name' => 'user',
            'email' => 'user@email.com',
            'email_verified_at' => now(),
            'password' => Hash::make('secret')
        ]);

        // factory(User::class, 20)->create();

        /*RolAdmin*/
        //||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
        $roladmin = Role::create([
            'name'        => 'admin',
            'slug'        => 'admin',
            'description' => 'Administrador',
            'full-access' => 'yes'
        ]);
        //table role user
        // $useradmin->role()->sync([$roladmin->id]);
        $useradmin = User::find($useradmin->id); //Admin
        $useradmin->role()->attach($roladmin);

        /*RolRoot*/
        //||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
        $rolroot = Role::create([
            'name'        => 'root',
            'slug'        => 'root',
            'description' => 'Super usuario',
            'full-access' => 'yes'
        ]);
        //table role user
        // $userroot->role()->sync([$rolroot->id]);
        $userroot = User::find($userroot->id); //Admin
        $userroot->role()->attach($rolroot);
        /*RolUser*/
        //||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
        $roluser = Role::create([
            'name'        => 'user',
            'slug'        => 'user',
            'description' => 'Usuario'
        ]);
        
         //table role user
        // $userroot->role()->sync([$rolroot->id]);
        $user = User::find($user->id); //Admin
        $user->role()->attach($roluser);
        



    	$permission_all = [] ;

        //Users
        $permission = Permission::create([
            'name'          => 'Dashboard',
            'slug'          => 'dashboard',
            'description'   => 'Panel principal',
        ]);


        $permission = Permission::create([
            'name'          => 'Usuarios',
            'slug'          => 'users',
            'description'   => 'Panel de usuarios',
        ]);

        $permission = Permission::create([
            'name'          => 'Role',
            'slug'          => 'role',
            'description'   => 'Administrador de roles',
        ]);

        $permission = Permission::create([
            'name'          => 'Empresas',
            'slug'          => 'company',
            'description'   => 'Perfil de empresa',
        ]);

        $permission = Permission::create([
            'name'          => 'Clientes',
            'slug'          => 'customer',
            'description'   => 'Panel de clientes',
        ]);

        $permission = Permission::create([
            'name'          => 'Tipo de donaciones',
            'slug'          => 'doantion',
            'description'   => 'Tipo de donaciones de clientes',
        ]);

        $permission = Permission::create([
            'name'          => 'Facturas',
            'slug'          => 'invoices',
            'description'   => 'Facturas de clientes',
        ]);
        // $permission = Permission::create([
        //     'name'          => 'Navegar usuarios',
        //     'slug'          => 'users.index',
        //     'description'   => 'Lista y navega todos los usuarios del sistema',
        // ]);

        // $permission_all[] = $permission->id;

        // $permission = Permission::create([
        //     'name'          => 'Ver detalle de usuario',
        //     'slug'          => 'users.show',
        //     'description'   => 'Ver en detalle cada usuario del sistema',            
        // ]);

        // $permission_all[] = $permission->id;

        // $permission = Permission::create([
        //     'name'          => 'Creación de usuarios',
        //     'slug'          => 'users.create',
        //     'description'   => 'Podría crear nuevos usuarios en el sistema',            
        // ]);

        // $permission_all[] = $permission->id;

        // $permission = Permission::create([
        //     'name'          => 'Edición de usuarios',
        //     'slug'          => 'users.edit',
        //     'description'   => 'Podría editar cualquier dato de un usuario del sistema',
        // ]);

        // $permission_all[] = $permission->id;
        
        // $permission = Permission::create([
        //     'name'          => 'Eliminar usuario',
        //     'slug'          => 'users.destroy',
        //     'description'   => 'Podría eliminar cualquier usuario del sistema',      
        // ]);

        // $permission_all[] = $permission->id;


        //table role user
        $roluser->permissions()->attach(1);
        $roladmin->permissions()->sync([1,2,4,5,6,7]);
        $rolroot->permissions()->sync([1,2,3,4,5,6,7]);


        //Roles
        // $permission = Permission::create([
        //     'name'          => 'Navegar roles',
        //     'slug'          => 'roles.index',
        //     'description'   => 'Lista y navega todos los roles del sistema',
        // ]);

        // $permission_all[] = $permission->id;

        // $permission = Permission::create([
        //     'name'          => 'Ver detalle de un rol',
        //     'slug'          => 'roles.show',
        //     'description'   => 'Ver en detalle cada rol del sistema',            
        // ]);

        // $permission_all[] = $permission->id;
        
        // $permission = Permission::create([
        //     'name'          => 'Creación de roles',
        //     'slug'          => 'roles.create',
        //     'description'   => 'Podría crear nuevos roles en el sistema',
        // ]);

        // $permission_all[] = $permission->id;
        
        // $permission = Permission::create([
        //     'name'          => 'Edición de roles',
        //     'slug'          => 'roles.edit',
        //     'description'   => 'Podría editar cualquier dato de un rol del sistema',
        // ]);

        // $permission_all[] = $permission->id;
        
        // $permission = Permission::create([
        //     'name'          => 'Eliminar roles',
        //     'slug'          => 'roles.destroy',
        //     'description'   => 'Podría eliminar cualquier rol del sistema',      
        // ]);

        // $permission_all[] = $permission->id;

        // //table role user
        // //$roladmin->permissions()->sync($permission_all);
        // //$rolroot->permissions()->sync($permission_all);
        // $roluser->permissions()->sync($permission_all);
    }
}
