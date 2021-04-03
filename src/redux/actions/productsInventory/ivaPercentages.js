import API from "../../../services";
import { gql } from "graphql-request";
import * as groupTypes from "./types/ivaPercentages";

export const getIvaPercentages = () => async (dispatch) => {
  try {
    dispatch({
      type: groupTypes.GET_IVA_PERCENTAGES_LOADING,
      payload: { loading: true },
    });

    const response = await API.request(gql`
      query {
        ivaPercentages {
          id
          value
        }
      }
    `);
    dispatch({
      type: groupTypes.GET_IVA_PERCENTAGES_SUCCESS,
      payload: {
        loading: false,
        success: true,
        ivaPercentages: response.ivaPercentages,
      },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: groupTypes.GET_IVA_PERCENTAGES_FAILED,
      payload: {
        loading: false,
        success: false,
      },
    });
  }
};