/**
 * Returns an object with the necessary item data
 * to create the modal confirmation window and
 * redirect the user if the process is successful.
 * Types depend on the action to perform.
 *
 * TYPE1: It's specific for item creation(projects and updates).
 *
 * TYPE2: It's specific for item's update process (user, projects, updates).
 *
 * TYPE3: It's specific for item's deletion (user, projects, updates).
 * @param {string} type TYPE1 | TYPE2 | TYPE3
 * @param {string} item user | project | update
 * @returns Object with information to create a modal confirmation window.
 */
export const getItemData = (type, item) => {
  try {
    if (!type || !item) throw new Error("You must provide a type and an item");
    return itemTypes[type.toUpperCase()][item.toLowerCase()];
  } catch (error) {
    console.error(error);
  }
};

// items declaration
const itemTypes = {
  TYPE1: {
    project: {
      type: "project",
      title: "ARE YOU SURE?",
      action: "create",
      description:
        "You are about to create a new project. If you want to proceed click confirm, otherwise cancel this operation",
      redirect: "/dashboard/projects",
      successMsg: "Project Created",
    },
    update: {
      type: "update",
      title: "ARE YOU SURE",
      action: "create",
      description:
        "You are about to create a new update. If you want to proceed click confirm, otherwise cancel this operation",
      redirect: "back",
      successMsg: "Update Added",
    },
  },
  TYPE2: {
    user: {
      type: "user",
      title: "ARE YOU SURE?",
      action: "update",
      description:
        "You are about to update your account. If you want to proceed click confirm, otherwise cancel this operation",
      redirect: "/dashboard/projects",
      successMsg: "Account Updated",
    },
    project: {
      type: "project",
      title: "ARE YOU SURE?",
      action: "update",
      description:
        "You are about to update this project. If you want to proceed click confirm, otherwise cancel this operation",
      redirect: "back",
      successMsg: "Project Updated",
    },
    update: {
      type: "update",
      title: "ARE YOU SURE?",
      action: "update",
      description:
        "You are about to edit this update. If you want to proceed click confirm, otherwise cancel this operation",
      redirect: "back",
      successMsg: "Update Modified",
    },
  },
  TYPE3: {
    user: {
      type: "user",
      title: "WARNING!",
      action: "delete",
      description:
        "You are about to delete your account. If you want to proceed click delete, otherwise cancel this operation",
      redirect: "/registration",
      successMsg: "Account Deleted",
    },
    project: {
      type: "project",
      title: "WARNING!",
      action: "delete",
      description:
        "You are about to delete this project. If you want to proceed click delete, otherwise cancel this operation",
      redirect: "/dashboard/projects",
      successMsg: "Project Deleted",
    },
    update: {
      type: "update",
      title: "WARNING!",
      action: "delete",
      description:
        "You are about to delete this update. If you want to proceed click delete, otherwise cancel this operation",
      redirect: "/dashboard/projects",
      successMsg: "Update Deleted",
    },
  },
};
